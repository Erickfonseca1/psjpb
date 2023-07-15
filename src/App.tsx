import './App.css'
import Topbar from "./components/topbar";
import Footer from "./components/footer";
import RoutesMap from "./routes";
// import React from "react";
function App() {

    return (
        <>
            <div className={'app'}>
                <Topbar></Topbar>
                <RoutesMap></RoutesMap>
                <Footer></Footer>
            </div>
        </>

)
}

export default App
