import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-10">
            <h2 className="text-5xl text-rose-800 font-extrabold mb-5">Opps...!!</h2>
            <p className="text-xl font-semibold">Page not found. Please go back. </p>
            <Link to={`/`}><button className="btn btn-outline mt-4">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;