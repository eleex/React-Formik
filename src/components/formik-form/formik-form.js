import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Autosuggest from 'react-autosuggest';
import FormError from '../form-error';

import './formik-form.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Must have a character')
    .max(50, 'Must be shorter than 50 characters')
    .required('Must enter a name'),
  email: Yup.string()
    .email('Must be a valid email address')
    .max(255, 'Must be shorter than 255')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Must be shorter than 50 characters')
    .required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required'),
  country: Yup.string().required('Must choose country'),
});

const FormikForm = () => {
  const [country, setCountry] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        country: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            resetForm();
            setSubmitting(false);
          });

        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   resetForm();
        //   setSubmitting(false);
        // }, 1000);
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className='input-row'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Enter your name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={touched.name && errors.name ? 'has-error' : null}
            />
            <FormError touched={touched.name} message={errors.name} />
          </div>

          <div className='input-row'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? 'has-error' : null}
            />
            <FormError touched={touched.email} message={errors.email} />
          </div>

          <div className='input-row'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={
                touched.password && errors.password ? 'has-error' : null
              }
            />
            <FormError touched={touched.password} message={errors.password} />
          </div>

          <div className='input-row'>
            <label htmlFor='password-confirmation'>Confirm your password</label>
            <input
              type='password'
              name='passwordConfirmation'
              id='password-confirmation'
              placeholder='Confirm your password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirmation}
              className={
                touched.passwordConfirmation && errors.passwordConfirmation
                  ? 'has-error'
                  : null
              }
            />
            <FormError
              touched={touched.passwordConfirmation}
              message={errors.passwordConfirmation}
            />
          </div>

          <div className='input-row'>
            <label htmlFor='country'>Country</label>
            <Autosuggest
              inputProps={{
                placeholder: 'Type your country',
                autoComplete: 'abcd',
                name: 'country',
                id: 'country',
                value: country,
                onChange: (_event, { newValue }) => {
                  setCountry(newValue);
                },
                className:
                  touched.country && errors.country ? 'has-error' : null,
              }}
              suggestions={suggestions}
              onSuggestionsFetchRequested={async ({ value }) => {
                if (!value) {
                  setSuggestions([]);
                  return;
                }

                try {
                  const result = await fetch(
                    `https://restcountries.eu/rest/v2/name/${value}`
                  ).then((result) => result.json());

                  setSuggestions(
                    result.map((row) => ({
                      name: row.name,
                      flag: row.flag,
                    }))
                  );
                } catch (e) {
                  setSuggestions([]);
                }
              }}
              onSuggestionsClearRequested={() => {
                setSuggestions([]);
              }}
              onSuggestionSelected={(event, { suggestion, method }) => {
                if (method === 'enter') {
                  event.preventDefault();
                }
                setCountry(suggestion.name);
                setFieldValue('country', suggestion.name);
              }}
              getSuggestionValue={(suggestion) => {
                return suggestion.name;
              }}
              renderSuggestion={(suggestion) => {
                return (
                  <div>
                    <img
                      src={suggestion.flag}
                      width='20'
                      alt={suggestion.name}
                    />
                    {suggestion.name}
                  </div>
                );
              }}
            />
            <FormError touched={touched.country} message={errors.country} />
          </div>

          <div className='input-row'>
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormikForm;
