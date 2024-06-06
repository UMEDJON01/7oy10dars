import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h4 className="font-bold text-4xl text-red-600 mb-4">
          There was an error...
        </h4>
        {error?.message && (
          <p className="mb-4 text-lg text-red-500">{error.message}</p>
        )}
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default ErrorElement;
