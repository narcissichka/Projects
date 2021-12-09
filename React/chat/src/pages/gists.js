import { useEffect, useState, useRef } from "react";
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
  const refInput = useRef(null);
  const refSend = useRef(null);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState(1);
  const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);
  useEffect(() => {
    dispatch(getGists());
    dispatch(searchGistsByUserName("bogdanq"));
  }, [dispatch]);

  const cb = debounce(() => {
    dispatch(searchGistsByUserName(value));
  }, 200);

  const buttonClass = (button) => {
    const butclass =
      button === selected
        ? `${styles.paginationItem} ${styles.currentPage}`
        : `${styles.paginationItem}`;
    return butclass;
  };
  const displayGists = () => {
    if (gistsError) {
      return <h1>{gistsError}</h1>;
    } else {
      return gists.map((gist, index) => (
        <a className={styles.link} href={gist.url} key={index}>
          {gist.url}
        </a>
      ));
    }
  };
  const displaySearchGists = () => {
    if (gistsErrorSearch) {
      return <h1>{gistsErrorSearch}</h1>;
    } else {
      return gistsSearch.map((gist, index) => (
        <a className={styles.link} href={gist.url} key={index}>
          {gist.url}
        </a>
      ));
    }
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
              {displayGists()}
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
            ref={refInput}
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
                  ref={refSend}
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
            <div>{displaySearchGists()}</div>
          )}
        </div>
      </div>
    </div>
  );
}
