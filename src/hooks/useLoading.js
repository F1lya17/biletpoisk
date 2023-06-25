import { useState } from "react";


export function useLoading(callback) {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetching = async (...args) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error]
}