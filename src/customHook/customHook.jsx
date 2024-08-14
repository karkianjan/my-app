import { useState, useEffect } from "react";

function UseFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const FetchData = async () => {
            try {
                setLoading (true);
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                if (!response.ok){
                    throw new Error("Failed to fetch Data");
                }

                const result = await response.json();
                setData(result);
            }
            catch (error){
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
            };

            FetchData();
        }, ["jsonplaceholder.typicode.com/todos"]);
        return {data, loading, error};
        }
      
    




export default UseFetch;