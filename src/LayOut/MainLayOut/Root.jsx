
import { Outlet } from 'react-router';
import Nav from '../../Components/Shared/Navbar';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;