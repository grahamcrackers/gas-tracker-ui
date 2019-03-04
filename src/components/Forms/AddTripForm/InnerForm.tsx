import { FormikProps } from 'formik';
import React, { FC } from 'react';
import { TripValues } from '.';
import { FieldInput } from '../FieldInput';
import { FormResetButton } from '../FormResetButton';
import { FormSubmitButton } from '../FormSubmitButton';

interface Props {
    formikBag: FormikProps<TripValues>;
}

export const InnerForm: FC<Props> = ({ formikBag }) => {
    const { handleSubmit, isSubmitting, handleReset, dirty } = formikBag;
    return (
        <form onSubmit={handleSubmit} className="content">
            <FieldInput
                name="date"
                label="Date"
                placeholder="e.g 12/01/2018"
                isHorizontal
            />
            <FieldInput
                name="odometer"
                label="Odometer"
                placeholder="e.g 5000"
                isHorizontal
            />
            <FieldInput
                name="tripMeter"
                label="Trip Meter"
                placeholder="e.g 299.9"
                isHorizontal
            />
            <FieldInput
                name="totalGallons"
                label="Gallons"
                placeholder="e.g 19.999"
                isHorizontal
            />
            <FieldInput
                name="totalFuelCost"
                label="Fuel Cost"
                placeholder="e.g 20.00"
                isHorizontal
            />

            <div className="field is-grouped">
                <div className="control">
                    <FormSubmitButton isSubmitting={isSubmitting} />
                </div>
                <div className="control">
                    <FormResetButton
                        handleReset={handleReset}
                        dirty={dirty}
                        isSubmitting={isSubmitting}
                    />
                </div>
            </div>
        </form>
    );
};
