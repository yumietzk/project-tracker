import React from 'react';
import { Form, Field } from 'react-final-form';
import styles from './LandingForm.module.css';

const validateEmail = (value) => {
  if (!value) {
    return 'You must enter an email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
};
const validatePassword = (value) =>
  value ? undefined : 'You must enter a password';

const LandingForm = ({ onSubmit, label }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <Field name="email" validate={validateEmail}>
            {({ input, meta }) => (
              <div className={styles.input}>
                <label className={styles.label}>Email</label>
                <input {...input} className={styles.inputbox} type="email" />
                {meta.error && meta.touched && (
                  <p className={styles['valid-error']}>{meta.error}</p>
                )}
              </div>
            )}
          </Field>
          <Field name="password" validate={validatePassword}>
            {({ input, meta }) => (
              <div className={styles.input}>
                <label className={styles.label}>Password</label>
                <input {...input} className={styles.inputbox} type="password" />
                {meta.error && meta.touched && (
                  <p className={styles['valid-error']}>{meta.error}</p>
                )}
              </div>
            )}
          </Field>

          <button type="submit" className={styles.btn}>
            {label}
          </button>
        </form>
      )}
    />
  );
};

export default LandingForm;
