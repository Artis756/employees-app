import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, onSalaryChange }) => {
	const li = data.map(item => <EmployeesListItem {...item} key={item.id} onDelete={() => onDelete(item.id)} onToggleProp={(e) => onToggleProp(e.currentTarget.getAttribute('data-toggle'), item.id)}
		onSalaryChange={(e) => onSalaryChange(e, item.id)} />)
	return (
		<ul className="app-list list-group">
			{li}
		</ul>
	)
}

export default EmployeesList;