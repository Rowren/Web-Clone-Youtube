import { useState,useEffect } from "react";
import "./SidebarStyle.css";

function Sidebar() {
  const [subscribe, setSubscribe] = useState([]);
  useEffect(() => {
    const fetchSubscribe = async () => {
      try {
        const data = await fetch("http://localhost:3000/subscribe?user_id=1")
        const json = await data.json();
        setSubscribe(json);
        console.log(json)
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูลการติดตาม:", error);
      }
    }
    fetchSubscribe(); 
  }, []) 
  
  return (
    <section id='side'>
      <div className="-side-pmr">
        <a href="#" className='-item'>
          <div className="icon">
          <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="text">หน้าแรก</div>
          </a>
        <a href="#" className='-item'>
          <div className="icon">
          <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="text">Shorts</div>
        </a>
        <a href="#" className='-item'>
          <div className="icon">
          <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="text">การติดตาม</div>
        </a>
      </div>
      <div className="-side-sec">
        <div className="text"> การติดตาม </div>
        {subscribe.map((sub) => (
          <a href="#!" className="-item">
          <div className="-icon ">
            <img src={sub.channel_profile_picture} alt="" />
          </div>
          <div className="text"> {sub.channel_name}</div>
          <div className="-status"></div>
        </a>
        ))}
      </div>
    </section>
  )
}

export default Sidebar