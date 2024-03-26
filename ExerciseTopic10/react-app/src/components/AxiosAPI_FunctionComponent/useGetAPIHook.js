import { useEffect, useState } from "react";
import axios from "axios";

const useGetAPI = (url) => {
    const [data, setData] = useState(null)
    useEffect(() => {
    axios.get(url)
        .then((response) => {
            setData(response.data);
            // console.log(response.data)

        })
        .catch((error) => {
            console.log(error);
        })

    },[url])
    // console.log(data)
    return data;
};

export default useGetAPI;