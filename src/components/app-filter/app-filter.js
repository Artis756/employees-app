import "./app-filter.css";

const AppFilter = ({ filter, onFilter }) => {
	const btnData = [
		{ text: "Все сотрудники", name: 'all' },
		{ text: "На повышение", name: 'rise' },
		{ text: "З/П больше 1000$", name: 'moreThan1000' },
	]

	const btns = btnData.map(({ name, text }) => {
		const active = filter === name;
		const clazz = active ? "btn-light" : "btn-outline-light"
		return <button type="button"
			className={`btn ${clazz}`}
			onClick={() => onFilter(name)}
			key={name}>
			{text}
		</button>
	})
	
	return (
		<div className="btn-group">
			{btns}
		</div>
	)
}

export default AppFilter;