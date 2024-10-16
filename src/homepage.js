import BlogList from './blogList';
import useFetch from './useFetch';

const Homepage = () => {
 const {data : blogs,ispending,error} = useFetch('http://localhost:8000/blogs')
 

 

  return (
    <div className = "Home">
      {error && <div>{error}</div>}
     {ispending && <div>Loading...</div>}
     { blogs && <BlogList blogs={blogs} /> }
     </div>
  );
}

export default Homepage;
