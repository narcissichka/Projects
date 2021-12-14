import { useSelector, useDispatch } from "react-redux";
import {
  setSubmitFB,
  editProfileFB,
  deleteInfo,
  profileSelector,
  submitSelector,
} from "../../store/profile";
import { HomeOutlined, ForumOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStyles } from "./use-styles";

const ProfileInfo = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const userInfo = useSelector(profileSelector);
  const submit = useSelector(submitSelector);

  const handleSubmit = () => {
    dispatch(setSubmitFB(true));
  };
  const handleValue = (e, field) => {
    dispatch(setSubmitFB(false));
    dispatch(editProfileFB(field, e.target.value));
  };
  const handleUnsubmit = () => {
    dispatch(setSubmitFB(false));
    dispatch(editProfileFB("subscription", false));
    dispatch(deleteInfo());
  };
  let { name, surname, sex, subscription } = userInfo ?? "";
  if (submit && name && surname && sex) {
    return (
      <div className={styles.wrapper}>
        <div className={`${styles.block} ${styles.blockInfo}`}>
          <h2>{name + " " + surname}</h2>
          <h3>{sex}</h3>
          <h3>
            {subscription ? "you are subscribed" : "you are not subscribed"}
          </h3>
        </div>
        <button className={styles.button} onClick={handleUnsubmit}>
          Edit
        </button>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <input
            required
            type="text"
            onBlur={(e) => {
              handleValue(e, "name");
            }}
            placeholder="Name"
            className={styles.input}
          />
          <input
            required
            type="text"
            onBlur={(e) => {
              handleValue(e, "surname");
            }}
            placeholder="Surname"
            className={styles.input}
          />
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                handleValue(e, "subscription");
              }}
              id="checkbox"
            />
            <label htmlFor="checkbox">subscribe for notifications</label>
          </div>
          <p>choose your sex:</p>
          <div className={styles.radioDiv}>
            <input
              type="radio"
              name="sex"
              onClick={(e) => {
                handleValue(e, "sex");
              }}
              value="male"
              id="radio-male"
            />
            <label htmlFor="radio-male">male</label>
            <input
              type="radio"
              name="sex"
              onClick={(e) => {
                handleValue(e, "sex");
              }}
              value="female"
              id="radio-female"
            />
            <label htmlFor="radio-female">female</label>
            <input
              type="radio"
              name="sex"
              onClick={(e) => {
                handleValue(e, "sex");
              }}
              value="other"
              id="radio-other"
            />
            <label htmlFor="radio-other">other</label>
          </div>
        </div>
        <button className={styles.button} onClick={handleSubmit}>
          Save
        </button>
      </div>
    );
  }
};

export const Profile = () => {
  const styles = useStyles();

  return (
    <div>
      <Link className={styles.linkHome} to={"/"}>
        <HomeOutlined fontSize="large" />
      </Link>
      <Link className={styles.linkChat} to={"/chat"}>
        <ForumOutlined fontSize="large" />
      </Link>
      <h1 className={styles.heading}>ProfilePage</h1>
      <ProfileInfo />
    </div>
  );
};
