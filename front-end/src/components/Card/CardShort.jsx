import { useEffect } from "react";

function CardShort({ shorts }) {
    useEffect(()=> console.log(contents),[]);

    const convertPublishDate = (date) => {
        const publish_date = new Date(date);
        const today = new Date();
        const difference_time = today.getTime() - publish_date.getTime();
        const difference_day = Math.round(difference_time / 86400000);
        return difference_day
    };

    const convertView = (viewCount) =>{
        let text_view_count = ""
        if(viewCount >= 1000 && viewCount < 1000){
            viewCount /= 1000;
            text_view_count = viewCount + " พัน ครั้ง"
        } else if(viewCount >= 10000 && viewCount < 10000){
            viewCount /= 10000;
            text_view_count = viewCount + " หมื่น ครั้ง"
        } else if(viewCount >= 100000 && viewCount < 100000){
            viewCount /= 100000;
            text_view_count = viewCount + " แสน ครั้ง"
        } else if(viewCount >= 1000000 ){
            viewCount /= 1000000;
            text_view_count = viewCount + " ล้าน ครั้ง"
        } else {
            text_view_count = viewCount + "ครั้ง"
        }
        return text_view_count;
    }
    return (
      <div className="shorts">
        <div className="-thumb">
          <img src={shorts.video_thumbnail} alt="" />
        </div>
        <div className="-about">
          <div className="detail">
            <a href={shorts.video_url} className="title">
              {shorts.video_title}
            </a>
            <div className="view">การดู {shorts.views} ครั้ง • {shorts.published} ที่ผ่านมา</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CardShort;
  