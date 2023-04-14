import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
       event.preventDefault();

       onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
       <div className='search-bar'>
           <form onSubmit={handleFormSubmit}>
                <div className="form-content"> 
                    <label>Enter Search Term</label>
                    <div className='input-container'>
                        <input value={term} onChange={handleChange} />
                        <button type="submit">🔍</button> 
                    </div>
                </div> {/* Add this line */}
           </form>
       </div>
    );
}

export default SearchBar;