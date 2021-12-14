import { useState } from "react";
import { Input, Button, Divider } from "@mui/material";
import { HomeOutlined, Login, VpnKeyOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStyles } from "./use-styles";

export function LoginForm({ title, submitButton, onSubmit }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      return;
    }

    try {
      await onSubmit(form.email, form.password);
    } catch {
      console.log("handleSubmit:error");
    }
  };
  const styles = useStyles();
  return (
    <div>
      <Link className={styles.linkHome} to={"/"}>
        <HomeOutlined fontSize="large" />
      </Link>
      {title === "Login" && (
        <Link className={styles.link} to={"/sign-up"}>
          <VpnKeyOutlined fontSize="large" />
        </Link>
      )}{" "}
      {title === "Sign up" && (
        <Link className={styles.link} to={"/login"}>
          <Login fontSize="large" />
        </Link>
      )}
      <h1 className={styles.heading}>{title}</h1>
      <Divider />
      <Input
        fullWidth
        placeholder="Email ..."
        value={form.email}
        inputProps={{
          "data-name": "email",
        }}
        onChange={handleChangeForm}
      />
      <Input
        fullWidth
        placeholder="Password ..."
        value={form.password}
        inputProps={{
          "data-name": "password",
        }}
        onChange={handleChangeForm}
      />
      <Button onClick={handleSubmit}>{submitButton}</Button>
    </div>
  );
}
