import { useEffect, useState } from 'react';

const useRequest = <T>(defValue: T, url: string) => {

    const [data, setData] = useState<T>(defValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchData();
    }, [url]);

    const fetchData = () => {
        setLoading(true);
        setData(defValue);
        setTimeout(() => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setData(data as T);
                })
                .catch(() => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                });
        });
    }

    return { data, loading, error };
}

export default useRequest;