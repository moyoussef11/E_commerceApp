import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error404 = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = 'page not found';
  }
  
  return (
    <div className="bg-slate-200 h-screen flex space-y-3 items-center justify-center flex-col">
      <h2 className="text-5xl font-bold">{errorStatus}</h2>
      <p className="text-2xl font-semibold">{errorStatusText}</p>
      <Link to='/' className="p-2 bg-black text-white capitalize rounded-full" >back to home </Link>
    </div>
  )
};

export default Error404;