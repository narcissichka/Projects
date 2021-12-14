import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Profile } from "../components";
import { getSessionFB, getSubmitFB } from "../store/profile";
export const ProfilePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSessionFB());
    dispatch(getSubmitFB());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
};
