import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            data : [
                {
                    name: 'John C.',
                    salary: 800,
                    isIncreased: true,
                    isLiked: true,
                    id:1,
                },

                {
                    name: 'Alex M.',
                    salary: 3000,
                    isIncreased: false,
                    isLiked: false,
                    id:2,
                },

                {
                    name: 'Ivan D.',
                    salary: 5000,
                    isIncreased: false,
                    isLiked: false,
                    id:3,
                },
            ],
            term: '',
            filter: 'all',
        };

        this.filterObj = {
            'isIncreased': function (items) {
                return items.filter(item => item.isIncreased);
            },

            'isSalary': function (items) {
                return items.filter(item => item.salary > 1000);
            },

            'all': function (items) {
                return items;
            }
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const currentData = data.filter(person => person.id !== id);
            return {
                data: currentData,
            }
        });
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
            const newPerson = {
                name,
                salary,
                isIncreased: false,
                isLiked: false,
                id: data[data.length - 1].id + 1,
            };

            const newPeople = [...data, newPerson];

            return {
                data: newPeople,
            };
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(dataItem => dataItem.id === id ?
                {...dataItem, [prop]: !dataItem[prop]} : dataItem)
        }));
    }

    searchItem = (items, term) => {
        if (!term.length)
            return items;

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    onUpdateSearch = (term) => {
        this.setState({
           term,
        });
    }

    filterItems = (items, filter) => {
       return this.filterObj[filter](items);
    }

    onFilterSelect = (filter) => {
        this.setState({
            filter,
        })
    }

    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterItems(this.searchItem(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={data}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                   />

                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
