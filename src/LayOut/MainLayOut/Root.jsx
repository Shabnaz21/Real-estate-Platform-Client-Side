
import { Outlet } from 'react-router';
import Nav from '../../Components/Shared/Navbar';
import FooterDesign from '../../Components/Shared/Footer';


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <FooterDesign></FooterDesign>
        </div>
    );
};

export default Root;