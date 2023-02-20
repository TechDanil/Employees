import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employers-list-item";

function EmployeesList(props) {
    const {data} = props;

    const people = data.map(person => {
        const {id, ...personProps} = person;

       return (
           <EmployeesListItem key={id} {...personProps}/>
       );
    });

    return (
        <ul className="app-list list-group">
            {people}
        </ul>
    );
}

export default EmployeesList;