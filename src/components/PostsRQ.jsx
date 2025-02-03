import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Link } from "react-router-dom"
const PostsRQ = () => {

   const {data, isLoading, isError, error, isFetching, refetch} = useQuery({
        queryKey:["posts"],
        queryFn: () => {
          return axios.get("http://localhost:4000/posts")

        },
    enabled: false
    })
    console.log({ isLoading, isFetching })

    if (isLoading) {
        return <div>Page is Loading...</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }
    console.log(data);
    return (
        <div className="">
            <button onClick={refetch} className="bg-rose-300 p-2 rounded-md">Fetch Data</button>
            {data?.data.map(post => (
                
                <Link to={`/rq-posts/${post.id}`} key={post.id}>
                    <div className="bg-slate-900 rounded-2xl p-[20px] w-[90%] m-5 text-slate-200 hover:bg-slate-950">
                    <h3 className="text-2xl font-black m-0">{post.title}</h3>
                    <p className="text-xl mt-4">{post.body}</p>
                </div>
                </Link>
            
            ))}
        </div>
      )
}

export default PostsRQ