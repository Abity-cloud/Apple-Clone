import React,{useState,useEffect} from 'react';
// import "./News.css"
function Applenews() {
const [AppleNews,addAppleNews] = useState([]);
useEffect (() => {
    fetch(
        
       "http://newsapi.org/v2/everything?q=apple&from=2021-02-08&to=2021-02-08&sortBy=popularity&apiKey=e17706f4591a43d8a73625618b89b3e3"
       
    )
    .then((response)  => response.json())
.then((data) => {
    console.log(data)
    const abi= data.articles;
    addAppleNews(abi)
})
},[])
console.log(AppleNews)

return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest News
            </div>
          </div>
          {AppleNews.slice(0,6).map((singleArticle) => {
            let newsTitle = singleArticle.title;
            let newsLink = singleArticle.description;
            let newsImage = singleArticle.urlToImage;
            let newsWrapper = (
              <div key={newsTitle} className="col-sm-12 col-md-4">
                <div className="singlenewsWrapper">
                  <div className="videoThumbnail">
                    <a href={newsImage} target="_blank">
                      <img src={singleArticle.urlToImage} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={newsLink} target="_blank">
                        {singleArticle.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleArticle.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return newsWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default Applenews;
