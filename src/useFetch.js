import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [ data, setData ] = useState(null);
    const [ isPending, setIsPending ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(()=>{
            fetch(url, { signal: abortController.signal })
                .then(res =>{
                    if(!res.ok){
                        throw Error('could not fetch the data at 8080. check properly! :) ')
                    }
                    return res.json();
                })
                .then(data =>{
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err =>{
                    if(err.name==='AbortError'){
                        console.log('fetch Aborted')
                    }else{
                        setIsPending(false);
                        setError(err.message);
                    }
                })
            },1000); 
            return ()=> abortController.abort();
        },[url]);
    return {data, error, isPending};
}
 
export default useFetch;