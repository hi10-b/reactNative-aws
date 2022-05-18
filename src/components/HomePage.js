import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="root">
            HomePage
            {sessionStorage['user']}
            {/* navbar */}
            {/* button links to other pages */}
            {/* dashboard */}
            <Link to="/sales">
                <button >Sales</button>
            </Link>
        </div>
    )
}

export default HomePage
