import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";

const LayoutPage = ()=> {
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default LayoutPage; 