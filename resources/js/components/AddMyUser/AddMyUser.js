import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AddMyUser.css';

export default class AddMyUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            last_name: '',
            first_name: '',
            middle_name: '',
            address: '',
            phone_number: ''
        };
        this.input = this.input.bind(this);
        this.add = this.add.bind(this);
    }

    input(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    add(e) {
        if (e.target.checkValidity()) {
            e.preventDefault();
            axios.post('/api/myuser', this.state);
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <form className="form">

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Фамилия</span>
                    </div>
                    <input
                        className="form-control"
                        name="last_name"
                        value={this.state.last_name}
                        onChange={this.input}
                        required
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Имя</span>
                    </div>
                    <input
                        className="form-control"
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.input}
                        required
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Отчество</span>
                    </div>
                    <input
                        className="form-control"
                        name="middle_name"
                        value={this.state.middle_name}
                        onChange={this.input}
                        required
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Адрес</span>
                    </div>
                    <input
                        className="form-control"
                        name="address"
                        value={this.state.address}
                        onChange={this.input}
                        required
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Телефон</span>
                    </div>
                    <input
                        className="form-control"
                        name="phone_number"
                        value={this.state.phone_number}
                        onChange={this.input}
                        required
                    />
                </div>

                <div className="form__buttons">
                    <Link to="/" className="btn btn-secondary">
                        Назад
                    </Link>

                    <button onClick={this.add} className="btn btn-secondary">
                        Добавить
                    </button>
                </div>

            </form>
        );
    }
}