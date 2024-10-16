import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs && blogs.length > 0 ? (
        blogs.map(blog => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))
      ) : (
        <div>No blogs to display</div>
      )}
    </div>
  );
};

export default BlogList;
