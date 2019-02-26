import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Menu } from './components/Menu';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />
                    {/* <Menu /> */}
                    <Main />
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
