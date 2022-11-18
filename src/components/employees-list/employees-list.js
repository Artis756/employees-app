import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
	const li = data.map(item => <EmployeesListItem {...item} key={item.id} onDelete={() => onDelete(item.id)} onToggleProp={(e) => onToggleProp(e.currentTarget.getAttribute('data-toggle'), item.id)} />)
	return (
		<ul className="app-list list-group">
			{li}
		</ul>
	)
}

export default EmployeesList;