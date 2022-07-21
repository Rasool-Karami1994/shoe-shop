import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../input/Input";
const initialValues = {
  id: 1,
  name: "",
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(3, "name is too short"),
  email: Yup.string()
    .email("Email format is not correct")
    .required("Email is required!"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "min length is 8 char!"),
});
const onSubmit = (values) => {
  console.log(values);
};
const LoginForm = () => {
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
        <h2>Welcome back</h2>
        <p>Welcome back! Please enter your detailes.</p>

        <Input label="Email" name="email" formik={formik} type="email" />

        <Input label="Password" name="password" formik={formik} />
        <button
          type="submit"
          disabled={!formik.isValid}
          className={!formik.isValid ? "disabeled-btn" : ""}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
