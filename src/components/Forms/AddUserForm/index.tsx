import { Formik } from 'formik';
import React, { useState } from 'react';
import { object, string } from 'yup';
import { addUser } from '../../../api/users';
import { User } from '../../../Models/Users';
import { FieldInput } from '../FieldInput';

interface AddUserFormValues {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
}

export const AddUserForm = () => {
    const [formValues] = useState<AddUserFormValues>({
        firstName: '',
        lastName: '',
        username: '',
        email: ''
    });

    return (
        <Formik
            initialValues={formValues}
            onSubmit={(values, { setSubmitting }) => {
                addUser(values as User).then(({ data }) => {
                    setSubmitting(false);
                });
                // setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                // }, 500);
            }}
            validationSchema={object().shape({
                firstName: string().required('Required'),
                lastName: string().required('Required'),
                username: string().required('Required'),
                email: string()
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
                <form onSubmit={handleSubmit} className="content">
                    <FieldInput
                        name="firstName"
                        label="First Name"
                        placeholder="e.g Alex"
                    />
                    <FieldInput
                        name="lastName"
                        label="Last Name"
                        placeholder="e.g Smith"
                    />
                    <FieldInput
                        name="username"
                        label="Username"
                        placeholder="e.g asmith"
                    />
                    <FieldInput
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="e.g. alexsmith@gmail.com"
                        className={
                            errors.email && touched.email
                                ? 'input is-danger'
                                : 'input'
                        }
                    />

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
