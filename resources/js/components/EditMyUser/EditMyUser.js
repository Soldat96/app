import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './EditMyUser.css';

export default class EditMyUser extends React.Component {
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
        this.edit = this.edit.bind(this);
    }

    componentWillMount() {
        axios
            .get('/api/myuser/' + this.props.match.params.id + '/edit')
            .then(response => {
                if (response.data.id) {
                    this.setState(response.data);
                } else {
                    this.props.history.push('/404');
                }
            });
    }

    input(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    edit(e) {
        if (e.target.checkValidity()) {
            e.preventDefault();
            axios.put('/api/myuser/' + this.props.match.params.id, this.state);
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

                    <button onClick={this.edit} className="btn btn-secondary">
                        Изменить
                    </button>
                </div>

            </form>
        );
    }
}