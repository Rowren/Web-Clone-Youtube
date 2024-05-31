import SearchBox from "../Search/SearchBox"
import "./NavStyle.css"

function Nav() {
  return (
    <section id='nav'>
      <div className='-brand'>
        <div className='-ham'>
        <a href="/"> <img src="https://via.placeholder.com/24x24" alt="" />
        </a> </div>
        <div className='-logo'>
        <img src="https://via.placeholder.com/97x20" alt="" />
        </div>
      </div>
      <SearchBox />
      <div className='-end'>
        <div className="-end-item">x</div>
        <div className="-end-item">x</div>
        <div className="-end-item">x</div>
      </div>

    </section>
  ) 
}

export default Nav