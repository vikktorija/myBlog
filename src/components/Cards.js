import { Link } from 'react-router-dom';

const NewsCard = (props) => {
  const {image, date, title, text, id} = props.item
    return (
      <div>
        <div className="news-card">
            <img className="img" src={image} alt="content" />
            <span className="news-data">{date}</span>
            <div className="news-card-content">
                <h3 className="news-text">
                  <Link to={`/blog/${id}`}>
                    {title}
                  </Link>
                  </h3>
                <p className="news-text">{text}</p>
            </div>
        </div>
        <hr className="hr" />
      </div>

    );
  };
  
  export default NewsCard;
