import './employees-list-item.css';

function EmployeesListItem(props) {
    const {name, salary, isIncreased, isLiked, onDelete, onToggleProp} = props;

    let classNames = "list-group-item d-flex justify-content-between";

    if (isIncreased)
        classNames += " increase";

    if (isLiked)
        classNames += " like";

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle="isLiked">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="isIncreased">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash" onClick={onDelete}></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;