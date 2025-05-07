import React, { Suspense, useEffect, useState } from 'react';
import Loader from './Loader';

const WrapperContainer = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Show loader for at least 1 second

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Suspense fallback={<Loader />}>
            {children}
        </Suspense>
    );
};

export default WrapperContainer; 