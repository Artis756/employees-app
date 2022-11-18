import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'John A.', salary: '1023', increase: false, id: 0 },
				{ name: 'Barbara S.', salary: '1242', increase: true, id: 1 },
				{ name: 'Bob D.', salary: '4212', increase: false, id: 2 },
			]
		};
		this.maxId = 4
	}

	onDelete = (id) => {
		this.setState({ data: this.state.data.filter(item => item.id !== id) })
	}

	onAdd = (name, salary) => {
		const emp = {
			name, salary,
			increase: false,
			id: this.maxId++
		}
		this.setState({ data: [...this.state.data, emp] })
	}

	render() {
		const { data } = this.state;
		return (
			<div className="app" >
				<AppInfo />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeesList data={data} onDelete={this.onDelete} />
				<EmployeesAddForm onAdd={this.onAdd} />
			</div>
		);
	}
}

export default App;
