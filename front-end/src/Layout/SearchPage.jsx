import { useLocation } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Search.css";
import { useEffect, useState } from "react";
import CardSearch from "../components/Card/CardSearch";

function SearchPage() {
  const location = useLocation();
  const query = location.state?.query;
  
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch(`http://localhost:3000/result?search_query=${query}`);
        const json = await response.json();
        setSearchResult(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (query) {
      fetchSearch();
    }
  }, [query]);

  return (
    <section id="main-layout">
      <Nav />
      <Sidebar />
      <section id="contents">
        <section className="the-card-search">
          {searchResult.map((result, index) => (
            <CardSearch key={index} result={result} />
          ))}
        </section>
      </section>
    </section>
  );
}

export default SearchPage;
