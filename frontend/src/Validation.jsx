import * as Yup from 'yup';

export const Validation = Yup.object({
  fname: Yup.string().matches(/^[a-zA-Z0-9]+$/, '* This field cannot contain white space and special character').required("Please Enter First Name"),
  lname: Yup.string().matches(/^[a-zA-Z0-9]+$/, '* This field cannot contain white space and special character').required("Please Enter Last Name"),
  email:Yup.string().email("Please enter Valid Email").required("Please Enter Email"),
  sdate: Yup.date().required("Please Enter Start Date"),
  edate: Yup.date().min(Yup.ref('sdate'), 'End date cannot be earlier than start date').required("Please Enter End Date"),
  file: Yup.mixed()
    .required("A file is required")
    .test(
      "fileFormat",
      "Only JPG, PNG, or WEBP files are allowed",
      (value) =>
        value && ["image/jpeg", "image/png", "image/webp"].includes(value.type)
    )
    .test(
      "fileSize",
      "File size must not exceed 2 MB",
      (value) => value && value.size <= 2 * 1024 * 1024
    ),
 
  cond: Yup.boolean()
  .oneOf([true], "You must agree to the privacy policy")
  .required("Required"),
})
