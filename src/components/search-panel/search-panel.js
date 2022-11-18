import './search-panel.css';

const SearchPanel = ({ onSearch, term }) => {
	return (
		<input type="text"
			className="form-control search-input"
			placeholder="Найти сотрудника"
			value={term}
			onChange={onSearch}
		/>
	)
}

export default SearchPanel;