import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import Contents from "../components/Contents/Contents";

function Main() {
  return (
    <section id="main-layout">
      <Nav />
      <Sidebar />
      <Contents />
    </section>
  );
}

export default Main;
