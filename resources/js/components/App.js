import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyUsers from './MyUsers/MyUsers';
import AddMyUser from './AddMyUser/AddMyUser';
import EditMyUser from './EditMyUser/EditMyUser';
import NotFound from './NotFound/NotFound';
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Switch>
                        <Route path="/" exact component={MyUsers}/>
                        <Route path="/add" exact component={AddMyUser}/>
                        <Route path="/edit/:id" exact render={p => <EditMyUser{...p}/>}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
