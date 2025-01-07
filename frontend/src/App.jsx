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
    <div className="">
      <Formik initialValues={initialValues} validationSchema={Validation}
       onSubmit={(values) => {
          console.log("Form submitted with values:", values);
        }}
        >
        {({ errors, touched, isValid, setFieldValue  }) => (
          <Form>
            <label htmlFor="fname">First Name</label>
            <Field type="text" name="fname"></Field>
            <br></br>
            {touched.fname && errors.fname && <small>{errors.fname}</small>}
            <br></br>

            <label htmlFor="lname">Last Name</label>
            <Field type="text" name="lname"></Field>
            <br></br>
            {touched.lname && errors.lname && <small>{errors.lname}</small>}
            <br></br>

            <label htmlFor="email">Email</label>
            <Field type="email" name="email"></Field>
            <br></br>
            {touched.email && errors.email && <small>{errors.email}</small>}
            <br></br>

            <label htmlFor="sdate">Start Date</label>
            <Field type="date" name="sdate"></Field>
            <br></br>
            {touched.sdate && errors.sdate && <small>{errors.sdate}</small>}
            <br></br>

            <label htmlFor="edate">End Date</label>
            <Field type="date" name="edate"></Field>
            <br></br>
            {touched.edate && errors.edate && <small>{errors.edate}</small>}
            <br></br>

            <label htmlFor="file">Upload File</label>
            <input
              id="file"
              name="file"
              type="file"
              accept="image/jpeg, image/png, image/webp"
              onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0]);
              }}
            />
            {touched.file && errors.file && <small>{errors.file}</small>}
            <br />

            <Field type="checkbox" name="cond"></Field>
            <label htmlFor="cond">Read all Privacy Policy Content</label>
            <br></br>
            {touched.cond && errors.cond && <small>{errors.cond}</small>}
            <br></br>

            <button type="submit" disabled={!isValid}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
