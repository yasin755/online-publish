import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Posts from './pages/posts/Posts';
import Author from './pages/author/Author';
import Category from './pages/category/Category';

function App() {
  return (
    <div className="">
        <Routes>
        <Route path="/" element={<Layout />}>
         <Route index element={<Posts />} />
          <Route path="author" element={<Author />} />
          <Route path="category" element={<Category />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
