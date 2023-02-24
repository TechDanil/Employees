import './app-info.css';

function AppInfo(props) {
    const {employees} = props;
    const increasedEmployees = employees.filter(employee => employee.isIncreased);

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employees.length}</h2>
            <h2>Премию получат: {increasedEmployees.length}</h2>
        </div>
    );
}

export default AppInfo;
