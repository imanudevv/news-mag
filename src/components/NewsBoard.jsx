import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.status === "ok" && Array.isArray(data.articles)) {
          setArticles(data.articles);
          setError(null);
        } else {
          setArticles([]);
          setError(data.message || "Failed to fetch news.");
        }
      })
      .catch(err => {
        setArticles([]);
        setError("Network error.");
      });
  }, [category]);
  return (
    <div className="p-4 bg-dark text-white rounded shadow">
      {/* Heading */}
      <h2 className="text-center fw-bold text-uppercase mb-4" style={{ fontSize: '2rem', letterSpacing: '1px' }}>
        Latest <span className="badge bg-danger fs-5 px-3 py-2 shadow-sm">News</span>
      </h2>

      {/* Error Message */}
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {/* Articles */}
      <div className="row">
        {!error && articles.length === 0 && (
          <div className="col-12 text-center">
            <p>No news articles available.</p>
          </div>
        )}
        {Array.isArray(articles) && articles.length > 0 && articles.map((news, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>

      {/* Read More Button */}
      <div className="text-center mt-4">
        <a
          href={url}
          className="btn btn-danger px-4 py-2 fs-5 fw-semibold shadow"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            borderRadius: '30px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            background: 'linear-gradient(90deg, #dc3545, #b02a37)',
          }}
        >
          Read More
        </a>
      </div>
    </div>

  )
}

export default NewsBoard