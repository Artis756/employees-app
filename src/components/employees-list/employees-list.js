import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data }) => {
	const li = data.map(item => <EmployeesListItem {...item} key={item.id} />)
	return (
		<ul className="app-list list-group">
			{li}
		</ul>
	)
}

export default EmployeesList;