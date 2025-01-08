import React from "react";
import { Field, Form, Formik } from "formik";
import { Validation } from "./Validation";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  sdate: "",
  edate: "",
  password: "",
  cpassword: "",
  file: null,
  cond: false,
};

const App = () => {
  return (
    <>
      <h1 className="text-3xl text-center py-5">Registration Form</h1>
      <div className="flex align-center justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={Validation}
          onSubmit={(values) => {
            console.log("Form submitted with values:", values);
          }}
        >
          {({ errors, touched, isValid, setFieldValue }) => (
            <Form className="bg-zinc-300 px-4 py-4">
              <div className="flex align-center pb-4">
                <label htmlFor="fname" className="pr-4">First Name</label>
                <Field
                  type="text"
                  name="fname"
                  className="border border-gray-300"
                ></Field>

                {touched.fname && errors.fname && <small>{errors.fname}</small>}
              </div>
              <div className="flex align-center pb-4">
                <label htmlFor="lname" className="pr-4">Last Name</label>
                <Field
                  type="text"
                  name="lname"
                  className="border border-gray-300"
                ></Field>

                {touched.lname && errors.lname && <small>{errors.lname}</small>}
              </div>
              <div className="flex align-center pb-4">
                <label htmlFor="email" className="pr-4">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="border border-gray-300"
                ></Field>

                {touched.email && errors.email && <small>{errors.email}</small>}
              </div>
              <div className="flex align-center pb-4">
                <label htmlFor="sdate" className="pr-4">Start Date</label>
                <Field
                  type="date"
                  name="sdate"
                  className="border border-gray-300"
                ></Field>

                {touched.sdate && errors.sdate && <small>{errors.sdate}</small>}
              </div>
              <div className="flex align-center pb-4">
                <label htmlFor="edate" className="pr-4">End Date</label>
                <Field
                  type="date"
                  name="edate"
                  className="border border-gray-300"
                ></Field>

                {touched.edate && errors.edate && <small>{errors.edate}</small>}
              </div>
              <div className="flex align-center pb-4">
                <label htmlFor="file" className="pr-4">Upload File</label>
                <input
                  id="file"
                  name="file"
                  type="file"
                  className="border border-gray-300"
                  accept="image/jpeg, image/png, image/webp"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                />
                {touched.file && errors.file && <small>{errors.file}</small>}
              </div>
              <div className="flex align-center pb-4">
                <Field type="checkbox" name="cond" className="pr-4"></Field>
                <label htmlFor="cond">Read all Privacy Policy Content</label>

                {touched.cond && errors.cond && <small>{errors.cond}</small>}
              </div>
              <button
                type="submit"
                className="bg-blue-400 text-white px-4 py-2"
                disabled={!isValid}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default App;
