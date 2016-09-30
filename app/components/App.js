// @flow
import React from 'react';
import { Link } from 'react-router';

const App = ({ children }: { children: Object }) =>
    <div>
        <h1>Budgets</h1>
        { children }
        <footer>
            <Link to="/">Budgets</Link>
            <Link to="/about">About</Link>
        </footer>
    </div>;

export default App;
