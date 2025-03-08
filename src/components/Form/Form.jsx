import { FiSearch } from 'react-icons/fi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './Form.module.css';

const FormTD = ({ handleSubmit }) => {
  const formOptions = Yup.object().shape({
    search: Yup.string().trim().required('Please, enter something!'),
  });

  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={handleSubmit}
      validationSchema={formOptions}
    >
      <Form className={style.form}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <Field
          className={style.input}
          placeholder="What do you want to write?"
          name="search"
        />
        <ErrorMessage name="search" component="span" className={style.error} />
      </Form>
    </Formik>
  );
};

export default FormTD;
