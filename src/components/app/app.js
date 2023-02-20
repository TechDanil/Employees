import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

function App() {
    const data = [
        {
            name: 'John C.',
            salary: 800,
            isIncreased: true,
            id:1,
        },

        {
            name: 'Alex M.',
            salary: 3000,
            isIncreased: false,
            id:2,
        },

        {
            name: 'Ivan D.',
            salary: 5000,
            isIncreased: false,
            id:3,
        },
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;
