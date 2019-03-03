import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { UserPage } from '../pages/UserPage';
import { UsersPage } from '../pages/UsersPage';

export const Routes: FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/users/:userId" component={UserPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};
