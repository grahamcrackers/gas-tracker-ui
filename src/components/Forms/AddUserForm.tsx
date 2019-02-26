import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface AddUserFormValues {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
}

export const AddUserForm = () => {
    const [formValues] = useState({} as AddUserFormValues);
    return (
        <Formik
            initialValues={formValues}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email()
                    .required('Required')
            })}
        >
            {({
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleSubmit,
                handleReset
            }) => (
                <form onSubmit={handleSubmit} className="box">
                    <div className="field">
                        <label className="label">First Name</label>
                        <div className="control">
                            <Field
                                name="firstName"
                                className="input"
                                type="text"
                                placeholder="e.g Alex Smith"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Last Name</label>
                        <div className="control">
                            <Field
                                name="lastName"
                                className="input"
                                type="text"
                                placeholder="e.g Alex Smith"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <Field
                                name="username"
                                className="input"
                                type="text"
                                placeholder="e.g. alexsmith@gmail.com"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <Field
                                name="email"
                                type="email"
                                placeholder="e.g. alexsmith@gmail.com"
                                className={`input
                                    ${
                                        errors.email && touched.email
                                            ? 'text-input error'
                                            : 'text-input'
                                    }
                                `}
                            />
                        </div>
                        <ErrorMessage name="email" />
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button type="submit" className="button is-link">
                                Submit
                            </button>
                        </div>
                        <div className="control">
                            <button
                                className="button is-text"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                    {/* <DisplayFormikState {...props} /> */}
                </form>
            )}
        </Formik>
    );
};
