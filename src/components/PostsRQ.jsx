import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const PostsRQ = () => {

   const {data, isLoading, isError, error} = useQuery({
        queryKey:["posts"],
        queryFn: () => {
          return axios.get("http://localhost:4000/posts")

        }
    })

    if (isLoading) {
        return <div>Page is Loading...</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }
    console.log(data);
    return (
        <div className="">
            {data?.data.map(post => (
                <div key={post.id} className="bg-slate-900 rounded-2xl p-[20px] w-[90%] m-5 text-slate-200 hover:bg-slate-950">
                    <h3 className="text-2xl font-black m-0">{post.title}</h3>
                    <p className="text-xl mt-4">{post.body}</p>
                </div>
            ))}
        </div>
      )
}

export default PostsRQ