import { useEffect, useState } from 'react';
export const useFetch = (url , param) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');
    // const [fetching,setFetching] = useState(false);
	useEffect(() => {
        setTimeout(() => {
            try {
                // setIsLoading(true)

                    const fetchData = async () => {
                        const res = await fetch(url, param);
                        const data = await res.json();
                        setData(data);
                        // setIsLoading(false);

                    };
                    fetchData();
            
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }, 500);
        // return () => {
        //     const fetchData = async () => {
        //         const res = await fetch(url, param);
        //         const data = await res.json();
        //         setData(data);
        //     };
        //     fetchData();
        // }
	}, [url]);
	//const {data, error, isLoading} = useFetch()  uzaem
	return { data, isLoading, error };
};
