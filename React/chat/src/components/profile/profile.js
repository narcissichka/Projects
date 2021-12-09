import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setSurname,
  setSubscription,
  setSex,
  setSubmit,
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
  let userInfo = useSelector(profileSelector);
  let submit = useSelector(submitSelector);

  const handleSubmit = () => {
    dispatch(setSubmit(true));
  };
  const handleUnsubmit = () => {
    dispatch(setSubmit(false));
    dispatch(setSubscription(false));
    dispatch(deleteInfo());
  };
  const handleSexValue = (event) => {
    dispatch(setSubmit(false));
    dispatch(setSex(event.target.value));
  };
  const handleSubscribtionValue = (event) => {
    dispatch(setSubmit(false));
    dispatch(setSubscription(event.target.checked));
  };
  const handleNameValue = (event) => {
    dispatch(setSubmit(false));
    dispatch(setName(event.target.value));
  };
  const handleSurnameValue = (event) => {
    dispatch(setSubmit(false));
    dispatch(setSurname(event.target.value));
  };
  let { name, surname, sex, subscription } = userInfo ?? "";

  if (submit && name && surname && sex) {
    return (
      <div className={styles.wrapper}>
        <h2>{name + " " + surname}</h2>
        <h3>{sex}</h3>
        <h3>
          {subscription ? "you are subscribed" : "you are not subscribed"}
        </h3>
        <button onClick={handleUnsubmit}>Edit</button>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <input
          required
          type="text"
          onInput={handleNameValue}
          placeholder="Name"
        />
        <input
          required
          type="text"
          onInput={handleSurnameValue}
          placeholder="Surname"
        />
        <div>
          <input
            type="checkbox"
            onChange={handleSubscribtionValue}
            id="checkbox"
          />
          <label htmlFor="checkbox">subscribe for notifications</label>
        </div>
        <p>choose your sex:</p>
        <div className={styles.radioDiv}>
          <input
            type="radio"
            name="sex"
            onClick={handleSexValue}
            value="male"
            id="radio-male"
          />
          <label htmlFor="radio-male">male</label>
          <input
            type="radio"
            name="sex"
            onClick={handleSexValue}
            value="female"
            id="radio-female"
          />
          <label htmlFor="radio-female">female</label>
          <input
            type="radio"
            name="sex"
            onClick={handleSexValue}
            value="other"
            id="radio-other"
          />
          <label htmlFor="radio-other">other</label>
        </div>
        <button onClick={handleSubmit}>Save</button>
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
