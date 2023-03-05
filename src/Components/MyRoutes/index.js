import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";

const MyRoutes = () => {

    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    )
};

export default MyRoutes;