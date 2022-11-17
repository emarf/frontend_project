// JUST FOR TEST
import { useEffect, useState } from 'react';

const BugButton = () => {
    const [error, setError] = useState(false);

    const throwError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <button type="button" onClick={throwError}>
            Bug button
        </button>
    );
};

export default BugButton;
