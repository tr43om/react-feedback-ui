const commentDetail = ({ author, timeAgo, text }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src="https://fakeimg.pl/300x300" alt="avatar" />
      </a>
      <div className="content">
        <a href="" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{timeAgo}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default commentDetail;
