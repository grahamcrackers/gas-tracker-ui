import { Formik, FormikActions, FormikProps } from 'formik';
import React, { FC, Fragment, useState } from 'react';
import { date, number, object } from 'yup';
import { addTrip } from '../../../api/trips';
import { Trip } from '../../../Models/Trip';
import { InnerForm } from './InnerForm';

interface Props {
    vehicleId: number;
}

export interface TripValues {
    date: string;
    odometer: number;
    tripMeter: number;
    totalGallons: number;
    totalFuelCost: number;
}

export const AddTripForm: FC<Props> = ({ vehicleId }) => {
    const [formValues] = useState<TripValues>({
        date: new Date().toLocaleDateString(),
        odometer: 0,
        tripMeter: 0,
        totalGallons: 0,
        totalFuelCost: 0
    });

    const handleSubmit = (
        values: TripValues,
        { setSubmitting }: FormikActions<TripValues>
    ) => {
        const newTrip: Trip = Object.assign({ ...values });
        newTrip.id = vehicleId;

        addTrip(newTrip).then(({ data }) => {
            setSubmitting(false);
        });
    };

    const handleValidation = object().shape({
        date: date().required('Required'),
        odometer: number().required('Required'),
        tripMeter: number().required('Required'),
        totalGallons: number().required('Required'),
        totalFuelCost: number().required('Required')
    });

    return (
        <Formik
            initialValues={formValues}
            onSubmit={handleSubmit}
            validationSchema={handleValidation}
        >
            {(formikBag: FormikProps<TripValues>) => {
                return (
                    <Fragment>
                        <InnerForm formikBag={formikBag} />
                        {/* Debugging Help */}
                        {/* <DisplayFormikState {...props} /> */}
                    </Fragment>
                );
            }}
        </Formik>
    );
};
