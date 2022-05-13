import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

const AuthPage = () => {
  const auth = useContext(AuthContext);
  const { loading, request } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const clearHandler = () => {
    setForm({
      email: "",
      password: "",
    });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      console.log(data.message);
      clearHandler();
    } catch (error) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (error) {}
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-6">
            <h1 className="h1 text-center">Вход</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={changeHandler}
                  name="email"
                  value={form.email && form.email}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Пароль</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={changeHandler}
                  name="password"
                  value={form.password && form.password}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginRight: "15px" }}
                onClick={loginHandler}
              >
                Войти
              </button>
              <button
                type="button"
                className="btn btn-success px-4"
                onClick={registerHandler}
              >
                Регстрация
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
