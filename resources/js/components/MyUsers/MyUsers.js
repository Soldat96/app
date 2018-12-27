import React from 'react';
import axios from 'axios';
import './MyUsers.css';
import { Link } from 'react-router-dom';

export default class MyUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myUsers: [] };
    }

    componentWillMount() {
        axios
            .get('/api/myuser')
            .then(response => this.setState({ myUsers: response.data }));
    }

    sort(fieldName) {
        axios
            .post('/api/sort', { fieldName })
            .then(response => this.setState({ myUsers: response.data }));
        this.forceUpdate();
    }

    delete(id) {
        axios.delete('/api/myuser/' + id);
        this.state.myUsers.map((myUser, index) => {
            if (myUser.id === id) delete this.state.myUsers[index];
        });
        this.forceUpdate();
    }

    edit(id) {
        this.props.history.push('/edit/' + id);
    }

    render() {
        return (
            <div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th className="th" onClick={() => this.sort('last_name')}>Фамилия</th>
                            <th className="th" onClick={() => this.sort('first_name')}>Имя</th>
                            <th className="th" onClick={() => this.sort('middle_name')}>Отчество</th>
                            <th className="th" onClick={() => this.sort('address')}>Адрес</th>
                            <th className="th" onClick={() => this.sort('phone_number')}>Телефон</th>
                            <th colSpan="2">
                                <Link to="/add" className="btn btn-secondary">
                                    Добавить
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.myUsers.map(myUser => (
                            <tr>
                                <td>{myUser.last_name}</td>
                                <td>{myUser.first_name}</td>
                                <td>{myUser.middle_name}</td>
                                <td>{myUser.address}</td>
                                <td>{myUser.phone_number}</td>
                                <td>
                                    <button onClick={() => this.edit(myUser.id)} className="btn btn-secondary">
                                        Изменить
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => this.delete(myUser.id)} className="btn btn-secondary">
                                        Удалить
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
