import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
	const data = [
		{ name: 'John A.', salary: '1023', increase: false, id: 0 },
		{ name: 'Barbara S.', salary: '1242', increase: true, id: 1 },
		{ name: 'Bob D.', salary: '4212', increase: false, id: 2 },
	]

	return (
		<div className="app">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeesList data={data} />
			<EmployeesAddForm />
		</div>
	);
}

export default App;
