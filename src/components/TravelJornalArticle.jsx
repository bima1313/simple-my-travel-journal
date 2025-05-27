export default function TravelJounalArticle({ data }) {
  return (
    <article>
      <div className="image-card">
        <img src={data.image} alt="Fujiyama" className="article-image" />
      </div>
      <div className="container">
        <div className="article-location">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#EA3323" className='icon'><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>        
          <h2>{data.location}</h2>
          <a href="#">View on Google Maps</a>
        </div>
        <div className="article-details">
          <h1>{data.name}</h1>
          <p className="date">{data.date}</p>
          <p>{data.description}</p>
        </div>
      </div>
    </article>
  );
}
