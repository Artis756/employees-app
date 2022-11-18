import { Component } from 'react';
import './employees-list-item.css';

const EmployeesListItem = ({ onToggleProp, name, salary, onDelete, increase, rise, onSalaryChange }) => {
	const liClasses = `list-group-item d-flex justify-content-between${increase ? ' increase' : ''}${rise ? ' like' : ''}`
	return (
		<li className={liClasses} >
			<span className="list-group-item-label"
				onClick={onToggleProp}
				data-toggle="rise">{name}</span>
			<input type="text"
				className="list-group-item-input"
				value={`${salary}$`}
				onChange={onSalaryChange} />
			<div className='d-flex justify-content-center align-items-center'>
				<button type="button"
					className="btn-cookie btn-sm "
					onClick={onToggleProp}
					data-toggle="increase">
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button"
					className="btn-trash btn-sm "
					onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	)
}

export default EmployeesListItem;