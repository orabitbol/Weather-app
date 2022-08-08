import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Favorites from "../page/Favorites";




const NavigationRoutes = () => {
    return (
        <Router >
            <div>
                <div>
                    <Routes> 
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/favorites" element={<Favorites />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default NavigationRoutes;