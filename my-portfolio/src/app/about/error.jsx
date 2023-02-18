'use client'

export default function Error({error, reset}) {
    return (
        <div className="flex items-center justify-center">
            <p>
                Error 404 | Page Not Found 
            </p>
            <button type="button" className="button-primary" onClick={() => reset()}>Refresh</button>
        </div>
    )
}