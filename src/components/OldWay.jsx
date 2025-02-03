import { useEffect, useState } from "react"
import axios from "axios";

const OldWay = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchPosts = async () => {
try {
    const response = await axios.get("http://localhost:4000/posts");
    setPosts(response.data);
} catch (error) {
    setIsError(true);
    console.log(error);
} finally {
    setIsLoading(false);
}}

useEffect(() => {
    fetchPosts();
}, [])

if (isLoading) {
    return <div>Page is Loading...</div>
}

if (isError) {
    return <div>Error has occured...</div>
}
  return (
    <div className="">
        {posts.map(post => (
            <div key={post.id} className="bg-slate-900 rounded-2xl p-[20px] w-[90%] m-5 text-slate-200 hover:bg-slate-950">
                <h3 className="text-2xl font-black m-0">{post.title}</h3>
                <p className="text-xl mt-4">{post.body}</p>
            </div>
        ))}
    </div>
  )}

export default OldWay