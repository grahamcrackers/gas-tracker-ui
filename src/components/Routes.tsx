import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const Routes: FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};
