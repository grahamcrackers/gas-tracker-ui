import { Formik } from 'formik';
import React, { FC, useState } from 'react';
import { object, string } from 'yup';
import { addVehicle } from '../../../api/vehicles';
import { Vehicle } from '../../../Models/Vehicle';
import { FieldInput } from '../FieldInput';

interface Props {
    handleSubmit(values: any, setSubmitting: (isSubmitting: boolean) => void): void;
}

interface AddVehicleFormValues {
    make: string;
    model: string;
}

export const AddVehicleForm: FC<Props> = ({ handleSubmit }) => {
    const [formValues] = useState<AddVehicleFormValues>({
        make: '',
        model: ''
    });

    return (
        <Formik
            initialValues={formValues}
            onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values, setSubmitting);
            }}
            validationSchema={object().shape({
                make: string().required('Required'),
                model: string().required('Required')
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
                        name="make"
                        label="Make"
                        placeholder="e.g Jeep"
                    />
                    <FieldInput
                        name="model"
                        label="Model"
                        placeholder="e.g Wrangler"
                    />

                    <div className="field is-grouped">
                        <div className="control">
                            <button
                                type="submit"
                                className={`button is-link ${isSubmitting &&
                                    'is-loading'}`}
                            >
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
