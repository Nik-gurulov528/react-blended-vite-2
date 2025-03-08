import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './EditForm.module.css';

const EditForm = ({ edittingObject, handleSubmit, handleClickCancel }) => {
  const editOptions = Yup.object().shape({
    text: Yup.string().trim().required('It cannot be empty'),
  });

  return (
    <Formik
      initialValues={edittingObject}
      onSubmit={handleSubmit}
      validationSchema={editOptions}
    >
      <Form className={style.form}>
        <button className={style.submitButton} type="submit">
          <RiSaveLine color="green" size="16px" />
        </button>

        <button
          className={style.editButton}
          type="button"
          onClick={handleClickCancel}
        >
          <MdOutlineCancel color="red" size="16px" />
        </button>

        <Field
          className={style.input}
          placeholder="What do you want to write?"
          name="text"
          autoFocus
        />
        <ErrorMessage name="text" component="span" />
      </Form>
    </Formik>
  );
};
export default EditForm;
