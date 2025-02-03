import OldWay from "./components/OldWay"
import PostsRQ from "./components/PostsRQ"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
    <div className="bg-black h-screen">
      <nav className="bg-neutral-950 text-slate-200 p-4 ">
        <ul className="flex justify-center gap-20 text-lg font-mono font-bold ">
        <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/posts">Traditional Posts</Link>
      </li>
<li>
<Link to="/rq-posts">PostsRQ</Link>
</li>
 
      </ul>
      </nav>
      <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/posts" element={<OldWay />} />
       <Route exact path="/rq-posts" element={<PostsRQ />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App