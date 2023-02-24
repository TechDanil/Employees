import './employees-add-form.css';
import {Component} from "react";

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const MIN_WORD_LENGTH = 5;
        const {onAdd} = this.props;
        const {name, salary} = this.state;

        if (name.length < MIN_WORD_LENGTH || !name.length || !salary.length)
            return;

        onAdd(name, salary);

        this.setState({
            name: '',
            salary: '',
        });
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                           name="name"
                           value={name}
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           onChange={this.onValueChange}/>
                    <input type="number"
                           name="salary"
                           value={salary}
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;