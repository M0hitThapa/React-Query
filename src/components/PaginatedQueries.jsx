import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const PaginatedQueries = () => {
    const fetchFruits = () => {
        return axios.get("http://localhost:4000/fruits");
    }

    const { data, isLoading, isError, error} = useQuery({
        queryKey:["fruits"],
        queryFn: fetchFruits
    })
    if (isLoading) {
        return <h2>Page is Loading...</h2>
    }
     if (isError) {
        return <h1>{error.message}</h1>
     }
  return (
    <div className="text-white">
        {data?.data.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  )
}

export default PaginatedQueries