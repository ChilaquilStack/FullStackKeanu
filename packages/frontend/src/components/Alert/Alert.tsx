export const Alert = () => (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="bg-red-100 border-l-4 border-red-500 p-4">
            <div className="flex items-center">
                <div className="text-red-500 rounded-full bg-red-200 p-2">
                    <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0a10 10 0 100 20 10 10 0 000-20zm.293 14.293a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3z"/></svg>
                </div>
                <div className="ml-3">
                    <p className="text-sm text-red-700">There was an error processing your request.</p>
                </div>
            </div>
        </div>
    </div>
)