import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import Home from '../Home'
import './index.scss'

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">begin</span>

                <Outlet />

                <span className="tags bottom-tags">
                    end behavioral;
                    <br />
                    <span className="bottom-tag-IEEE">-- library IEEE;</span>
                </span>

            </div>
        </div>
    )
}

export default Layout