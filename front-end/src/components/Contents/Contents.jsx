import { useState, useEffect } from "react";
import Tags from "../Tags/Tags";
import "./ContentStyle.css";
import CardVideo from "../Card/CardVideo";
import CardShort from "../Card/CardShort";

function Contents() {
  const [videos, setVideos] = useState ([]);
  const [shorts, setShorts] = useState ([]);

  useEffect(() => {
    const fetchVideos =  async () => {
      const data = await fetch("http://localhost:3000")
      const json = await data.json();
      setVideos(json);
    };
    const fetchShort=  async () => {
      const data = await fetch("http://localhost:3000/short")
      const json = await data.json();
      setShorts(json);
      console.log(json)
    }
    fetchVideos();
    fetchShort();
  },[])

  return (
    <section id='contents'>
      <Tags></Tags>
      <section id='the-cards'>
        {videos.map((video,index) => (
          <CardVideo key={index} contents={video} />
        )) }
        
        

      </section>
      <section id='shorts'>
        <div className="section-title">[] shorts</div>
        <div className="short-wrap">
          {shorts.map((short, index) => (
            <CardShort key={index} shorts={short} />
          ))}
          <div className="short">
        </div>
        </div>
        </section>
    </section >
  )
}

export default Contents