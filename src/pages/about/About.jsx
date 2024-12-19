import { useFormik } from 'formik';
import * as Yup from 'yup';

function About() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(100).required('Required'),
      email: Yup.string()
        .max(200)
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string().max(2000).required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div className="mx-4">
      <h2>Contact</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            className="input-base"
            type="text"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <input
            className="input-base"
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <textarea
            className="input-base"
            name="message"
            placeholder="Message"
            rows="4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
        </div>
        <button className="input-submit" type="submit">
          {formik.isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {formik.status && formik.status.success && (
          <div className="success">Message has been sent successfully!</div>
        )}
        {formik.status && formik.status.error && (
          <div className="error">Message not sent. Please try again.</div>
        )}
      </form>
    </div>
  );
}

export default About;
