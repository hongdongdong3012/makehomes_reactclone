import React from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Company from '../pages/Company';
import Work from '../pages/Work';
import Submission from '../pages/Submission';

export default() => {
    <HashRouter>
        <Route exact path="/" component={Main} />
        <Route path="/company" component={Company} />
        <Route path="/work" component={Work} />
        <Route path="/submission" component={Submission} />
    </HashRouter>
}