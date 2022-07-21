import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../input/Input";
import "./SignupForm.css";
import BooleanCheckBox from "../input/BooleanCheckBox";
import { Link } from "react-router-dom";
const initialValues = {
  id: 1,
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  terms: false,
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(3, "name is too short"),
  email: Yup.string()
    .email("Email format is not correct")
    .required("Email is required!"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "min length is 8 char!"),
  phoneNumber: Yup.string()
    .required("Phone Number is required!")
    .matches(/^[0-9]{11}$/, "Invalid phone number"),
  terms: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});
const onSubmit = (values) => {
  console.log(values);
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <div className="page-container">
      <form onSubmit={formik.handleSubmit}>
        <h2>Sign Up</h2>
        <Input label="Name" name="name" formik={formik} />
        <Input label="Email" name="email" formik={formik} type="email" />
        <Input
          label="Phone Number"
          name="phoneNumber"
          formik={formik}
          type="tel"
        />
        <Input label="Password" name="password" formik={formik} />
        <BooleanCheckBox formik={formik} />
        <button
          type="submit"
          disabled={!formik.isValid}
          className={!formik.isValid ? "disabeled-btn" : ""}
        >
          Create Account
        </button>
        <Link to="/login">
          <p>
            {" "}
            Already <span>login</span>?
          </p>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
