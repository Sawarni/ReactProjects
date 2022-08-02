import { useState, useCallback } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchServerData = useCallback(async (requestConfiguration, performDataOperation) => {

        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfiguration.url,
                {
                    method: requestConfiguration.method ? requestConfiguration.method : 'GET',
                    headers: requestConfiguration.headers ? requestConfiguration.headers : {},
                    body: requestConfiguration.body ? JSON.stringify(requestConfiguration.body) : null
                });

            if (!response.ok) {
                throw new Error("Request failed with response code :" + response.status)
            }
            const data = await response.json();
            performDataOperation(data);
        }
        catch (err) {
            setError(err.message || 'Something went wrong');
        }
        setIsLoading(false);

    }, []);
    return {
        isLoading,
        error,
        fetchServerData
    };

};

export default useHttp;