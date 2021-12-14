import { Link } from "react-router-dom";
import { List, ListItem } from "@mui/material";
import { useSelector } from "react-redux";

import { useStyles } from "./use-styles";
import { firebaseApp } from "../../api/firebase";
import { sessionSelector } from "../../store/session";

const signOut = () => {
  return firebaseApp.auth().signOut();
};
export const Home = () => {
  const session = useSelector(sessionSelector);
  const styles = useStyles();
  return (
    <div className={styles.home}>
      <h1 className={styles.heading}>HomePage</h1>
      <div className={styles.wrapper}>
        <List className={styles.list} component="nav">
          {!!session?.user?.email && (
            <>
              <Link className={styles.link} to={"/chat"}>
                <ListItem>
                  <p className={styles.itemText}>Chat</p>
                </ListItem>
              </Link>
              <Link className={styles.link} to={"/profile"}>
                <ListItem>
                  <p className={styles.itemText}>Profile</p>
                </ListItem>
              </Link>
              <Link className={styles.link} to={"/gists"}>
                <ListItem>
                  <p className={styles.itemText}>Gists</p>
                </ListItem>
              </Link>
            </>
          )}
          {!session?.user?.email && (
            <>
              <Link className={styles.link} to="/login">
                <ListItem>
                  <p className={styles.itemText}>Login</p>
                </ListItem>
              </Link>
              <Link className={styles.link} to="/sign-up">
                <ListItem>
                  <p className={styles.itemText}>Sign up</p>
                </ListItem>
              </Link>
            </>
          )}
        </List>
        <h1 className={styles.welcome}>welcome</h1>
        {!!session?.user?.email && (
          <button className={styles.exit} onClick={signOut}>
            exit
          </button>
        )}
      </div>
    </div>
  );
};
