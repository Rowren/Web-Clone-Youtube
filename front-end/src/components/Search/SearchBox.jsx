import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault(); // Prevents the default form submission
        navigate("/result", { state: { query }});
    };

    return (
        <form className='-center' onSubmit={handleSearch}>
            <div className="-search">
                <div className="-search-box">
                    <input 
                        type="text" 
                        className="-search-input" 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)} 
                    />
                </div>
                <button type="submit" className="-btn">Q</button>
            </div>
            <div className="-voice"></div>
        </form>
    );
}

export default SearchBox;
