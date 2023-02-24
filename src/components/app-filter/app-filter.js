import './app-filter.css';

function AppFilter (props){
    const {filter, onFilterSelect} = props;

    const buttonsData = [
        {filter: 'all', textContent: 'Все сотрудники'},
        {filter:'isIncreased', textContent:'На повышение'},
        {filter:'isSalary', textContent:'З/П больше 1000$'},
    ];

    const buttons = buttonsData.map(button => {
        const {textContent} = button;

        const isActive = filter === button.filter;
        const activeClass = isActive ? 'btn-light' : 'btn-outline-light';

        return (
            <button
                type="button"
                className={`btn ${activeClass}`}
                key={button.filter}
                onClick={() => onFilterSelect(button.filter)}>
                {textContent}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;