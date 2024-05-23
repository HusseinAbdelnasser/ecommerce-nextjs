"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import {  toast } from "react-toastify";

const SigninForm = () => {
  const router = useRouter();

  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);

  const handleSubmit = async (eo) => {
    eo.preventDefault();
    setisLoading(true);
    seterror(null);

    if (!email || !password) {
      toast.error("All Inputs must be filled");
      seterror("All input must be filled");
      return;
    }

    // sign in with email & password
    // Go to api/auth/[...nextauth]/route.js
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log(res);
    if (!res.ok) {
      toast.error("invalid email or password");
      seterror("invalid email or password");
      setisLoading(false);
      return;
    } else {
      toast.success("You Signed In Successfully");
      router.replace("/");
      setisLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={(eo) => {
            setemail(eo.target.value);
          }}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={(eo) => {
            setpassword(eo.target.value);
          }}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button
        disabled={!email || !password}
        type="submit"
        className="btn btn-primary"
      >
        {isLoading ? (
          <div
            style={{ width: "1.5rem", height: "1.5rem" }}
            className="spinner-border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          "Sign in"
        )}
      </button>

      <p style={{ color: "#ff7790", fontSize: "1.1rem", marginTop: "1rem" }}>
        {" "}
        {error}
      </p>

    </form>
  );
};

export default SigninForm;