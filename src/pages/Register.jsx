import React from "react";

import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../component";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("account crerated successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessgae =
      error?.reponse?.data?.error?.message || " please double check credintial";
    toast.error(errorMessgae);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-content-center ">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold "> Register</h4>
        <FormInput
          type="text"
          label="username"
          name="username"
          defaultValue="sky earth"
        />
        <FormInput
          type="email"
          label="email"
          name="email"
          defaultValue="sky@earth.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Allready a Member?{" "}
          <Link
            to="/Login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            {" "}
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
