
import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Oops...</h1>
      <p>
        {
          isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected error"
        }
      </p>
    </>
  );
}

export default ErrorPage
