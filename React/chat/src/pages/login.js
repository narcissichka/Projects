import { LoginForm } from "../components";
import { firebaseApp } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
export function LoginPage() {
  const navigate = useNavigate();
  const onSubmit = useCallback(
    (email, password) => {
      firebaseApp.auth().signInWithEmailAndPassword(email, password);
      setTimeout(() => navigate("/"), 100);
    },
    [navigate]
  );
  return (
    <div>
      <LoginForm submitButton="Login" title="Login" onSubmit={onSubmit} />
    </div>
  );
}
