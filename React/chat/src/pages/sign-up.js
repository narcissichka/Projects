import { LoginForm } from "../components";
import { firebaseApp } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export function SignUpPage() {
  const navigate = useNavigate();
  const onSubmit = useCallback(
    (email, password) => {
      firebaseApp.auth().createUserWithEmailAndPassword(email, password);
      setTimeout(() => navigate("/"), 100);
    },
    [navigate]
  );
  return (
    <div>
      <LoginForm submitButton="sign up" title="Sign up" onSubmit={onSubmit} />
    </div>
  );
}
