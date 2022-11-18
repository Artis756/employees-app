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
				{ name: 'John A.', salary: '1023', increase: false, rise: false, id: 0 },
				{ name: 'Barbara S.', salary: '1242', increase: true, rise: false, id: 1 },
				{ name: 'Bob D.', salary: '4212', increase: false, rise: false, id: 2 },
			],
			term: '',
			filter: 'all'
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
			rise: false,
			id: this.maxId++
		}
		this.setState({ data: [...this.state.data, emp] })
	}

	onToggleProp = (prop, id) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				} else {
					return { ...item }
				}
			})
		}))
	}

	searchEmp = (term, data) => {
		if (!term.length) return data;
		return data.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
	}

	onSearch = (e) => {
		this.setState({ term: e.target.value })
	}

	onFilter = (filter) => {
		this.setState({ filter })
	}

	filterEmp = (filter, data) => {
		switch (filter) {
			case 'rise':
				return data.filter(item => item.rise)
			case 'moreThan1000':
				return data.filter(item => item.salary > 1000)
			default:
				return data
		}
	}

	onSalaryChange = (e, id) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, salary: e.target.value.slice(0,-1)}
				} else {
					return { ...item }
				}
			})
		}))
	}

	render() {
		const { data, term, filter } = this.state;
		const totalEmps = data.length;
		const increased = data.filter(item => item.increase).length;
		const filteredData = this.filterEmp(filter, this.searchEmp(term, data));

		return (
			<div className="app" >
				<AppInfo totalEmps={totalEmps} increased={increased} />

				<div className="search-panel">
					<SearchPanel onSearch={this.onSearch} term={term} />
					<AppFilter filter={filter} onFilter={this.onFilter} />
				</div>

				<EmployeesList data={filteredData} onDelete={this.onDelete} onToggleProp={this.onToggleProp} onSalaryChange={this.onSalaryChange} />
				<EmployeesAddForm onAdd={this.onAdd} />
			</div>
		);
	}
}

export default App;
