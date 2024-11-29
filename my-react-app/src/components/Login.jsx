import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <div className="nevbar">
                <div className="tokenup">ToKenUp</div>
                <div className="part">
                    <div className="right"><Link to="/">Home</Link></div>
                    <div className="right"><Link to="/about">About</Link></div>
                    <div className="right"><Link to="/products">Products</Link></div>
                    <div className="right"><Link to="/contact">Contact</Link></div>
                    <div className="right"><button><Link to="/login">Login</Link></button></div>
                </div>
            </div>

            <div className="main_1" style={{ justifyContent: "center" }}>
                <div className="login_form">
                    <h1 className="login_title">Login</h1>
                    <form>
                        <div className="form_group">
                            <label htmlFor="email" className="form_label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form_input"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="password" className="form_label">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form_input"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button type="submit" className="main_1_button">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
