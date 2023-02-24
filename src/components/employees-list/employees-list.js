import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employers-list-item";

function EmployeesList(props) {
    const {data, onDelete, onToggleProp} = props;

    const people = data.map(person => {
        const {id, ...personProps} = person;

       return (
           <EmployeesListItem key={id}
                              {...personProps}
                              onDelete={() => onDelete(id)}
                              onToggleProp={(e) => onToggleProp(id,
                                  e.currentTarget.getAttribute('data-toggle'))}
                              />
       );
    });

    return (
        <ul className="app-list list-group">
            {people}
        </ul>
    );
}

export default EmployeesList;