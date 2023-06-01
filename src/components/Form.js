import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
export default function Form(props) {
  const formik = useFormik({
    initialValues: {
      numberOne: "",
      numberTwo: "",
    },
    // validationSchema: yup.object({
    //   name: yup.string().min(2),
    // }),
    onSubmit: (values, { resetForm }) => {
      const numberOne =
        values.numberOne === "" ? 0 : parseInt(values.numberOne, 10);
      const numberTwo =
        values.numberTwo === "" ? 0 : parseInt(values.numberTwo, 10);
      const numbers = { numberOne, numberTwo };
      props.onSum(numbers);
      resetForm({ values: "" });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>First Number:</label>
          <input
            type="text"
            name="numberOne"
            id="numberOne"
            value={formik.values.numberOne}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label>Second Number:</label>
          <input
            type="text"
            name="numberTwo"
            id="numberTwo"
            value={formik.values.numberTwo}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
