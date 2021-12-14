import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists, gistSelector, searchGistsByUserName } from "../store/gists";
import { Input, InputAdornment } from "@mui/material";
import { HomeOutlined, ForumOutlined, Send } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStyles } from "./gists-use-styles";
import debounce from "lodash.debounce";

export function Gists() {
  const {
    gists,
    gistsLoading,
    gistsError,
    gistsSearch,
    gistsLoadingSearch,
    gistsErrorSearch,
  } = useSelector(gistSelector);
  const dispatch = useDispatch();
  const [value, setValue] = useState("bogdanq");
  const [selected, setSelected] = useState(1);
  const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);

  // const searchGistsByUserNameDebounsed = useMemo(() => {
  //   return debounce((query) => {
  //     dispatch(searchGistsByUserName(query ?? "bogdanq"));
  //   }, 500);
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getGists());
    dispatch(searchGistsByUserName("bogdanq"));
  }, [dispatch]);

  const cb = useMemo(() => {
    return debounce(() => {
      dispatch(searchGistsByUserName(value ?? "bogdanq"));
    }, 500);
  }, [dispatch, value]);

  const buttonClass = (button) => {
    const butclass =
      button === selected
        ? `${styles.paginationItem} ${styles.currentPage}`
        : `${styles.paginationItem}`;
    return butclass;
  };
  const styles = useStyles();
  return (
    <div>
      <Link className={styles.linkHome} to={"/"}>
        <HomeOutlined fontSize="large" />
      </Link>
      <Link className={styles.linkChat} to={"/chat"}>
        <ForumOutlined fontSize="large" />
      </Link>
      <h1 className={styles.heading}>Gists</h1>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h2 className={styles.headText}>Latest</h2>
          {gistsLoading ? (
            <h2 className={styles.loading}>loading...</h2>
          ) : (
            <div>
              {!!gistsError && <h1>{gistsError}</h1>}
              {!gistsError &&
                gists.map((gist, index) => (
                  <a className={styles.link} href={gist.url} key={index}>
                    {gist.url}
                  </a>
                ))}
              <div className={styles.pagination}>
                {buttons.map((button, index) => (
                  <button
                    className={buttonClass(button)}
                    onClick={() => {
                      setSelected(button);
                      dispatch(getGists(button));
                    }}
                    key={index}
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.block}>
          <h2 className={styles.headText}>Search Gists</h2>
          <Input
            fullWidth
            className={styles.input}
            placeholder="Enter name..."
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={({ code }) => {
              if (code === "Enter") {
                cb();
              }
            }}
            endAdornment={
              <InputAdornment position="end">
                <Send
                  onClick={() => {
                    cb();
                  }}
                />
              </InputAdornment>
            }
          />

          {gistsLoadingSearch ? (
            <h2 className={styles.loading}>loading...</h2>
          ) : (
            <div>
              {!!gistsErrorSearch && <h1>{gistsErrorSearch}</h1>}
              {!gistsErrorSearch &&
                gistsSearch.map((gist, index) => (
                  <a className={styles.link} href={gist.url} key={index}>
                    {gist.url}
                  </a>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
