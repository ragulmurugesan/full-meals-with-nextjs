'use client';

// Error component has to be a client component. 

export default function Error() {
    return (
        <main className="error">
            <h1>Error occurred!</h1>
            <p>Failed to fetch meals. Please try again later!</p>
        </main>
    )
}