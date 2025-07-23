import image from '../assets/News.jpg'
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 h-100">
      <img src={src ? src :image} style={{height:"200px",width:"100%", objectFit:"cover"}} className="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description ? description.slice(0,90) : "News i.It is information about something that has just happened"}</p>
        <a href={url} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem