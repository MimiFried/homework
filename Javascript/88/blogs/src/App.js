import './App.css';
import {useState} from 'react';
import BlogList from './BlogList';
import Blog from './Blog';

function App() {
  const [selectedBlog, setSelectedBlog] = useState();

  return (
    <>
    <header>
      <nav>
        <ul>
          <li><a id="blogList" href="">Blogs</a></li>
        </ul>
      </nav>
    </header>
    <hr />
    <BlogList handleBlogSelected={setSelectedBlog}/>
    {selectedBlog && <Blog blog={selectedBlog} />}
    </>
  );
}

export default App;
