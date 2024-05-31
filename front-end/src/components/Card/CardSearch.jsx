function CardSearch({ result }) {
    return (
      <div className="card">
        <div className="-thumb">
          <img src={result.video_thumbnail} alt="" />
        </div>
        <div className="-about">
          <div className="detail">
            <div className="title"> 
              {result.video_title}
            </div>
            <div className="view">
              การดู {result.view_count} ครั้ง • {result.uploaded_ago}
            </div>
            <div className="channel"> 
              <div className="channel-img">
                <img src={result.channel_profile_picture} alt="" />
              </div>
              <div className="channel-name">
                {result.channel_name}
              </div>
            </div>
            <div className="caption title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe harum, perspiciatis deserunt, dolores dignissimos distinctio laboriosam ducimus sunt temporibus eos mollitia vitae pariatur ipsum cumque laborum, dolor inventore aspernatur.
            </div>
            <div className="option">@</div>
          </div>
        </div>
      </div>
    )
  }
  
  export default CardSearch;
  