import React from "react";
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            {/* Navbar */}
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

            {/* Section 1 */}
            <div className="main_1">
                <div className="main_1_left"></div>
                <div className="main_1_right">
                    <div className="main_1_h">Welcome to TokenUp: Unlock Your</div>
                    <div className="main_1_p">
                        Discover a world of rewards and opportunities tailored <br />
                        for KR Mangalam University students. Explore our <br />
                        diverse offerings
                    </div>
                    <button className="main_1_button">Redeem Now</button>
                </div>
            </div>

            {/* Section 2 */}
            <div className="main_2">
                <div className="main_2_left">
                    <div className="main_1_h">Elevate Your <br /> Learning Journey</div>
                    <div className="main_1_p">
                        Unlock a world of rewards through our <br /> comprehensive platform
                    </div>
                    <button className="main_1_button">Redeem</button>
                </div>
                <div className="main_2_right"></div>
            </div>

            {/* Section 3 */}
            <div className="main_3">
                <p className="courses">Courses</p>
            </div>

            {/* Section 4 */}
            <div className="main_4">
                <div className="row1">
                    <div className="box1">
                        <div className="box1_pic"></div>
                        <div className="box1_info">
                            <div className="box1_p1">Earn Credits</div>
                            <div className="box1_p2">Redeem for Rewards</div>
                            <div className="box1_button">
                                <button className="box1_button_one">Enroll</button>
                                <button className="box1_button_two">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="box2_pic"></div>
                        <div className="box2_info">
                            <div className="box2_p1">Books</div>
                            <div className="box2_p2">
                                Expand Your Knowledge, One Page at a Time
                            </div>
                            <div className="box2_button">
                                <button className="box2_button_one">Purchase</button>
                                <button className="box2_button_two">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row2">
                    <div className="box1">
                        <div className="row2_box1_pic"></div>
                        <div className="row2_box1_info">
                            <div className="box1_p1">Hackathons</div>
                            <div className="box1_p2">Compete, Innovate, Grow</div>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="row2_box2_pic"></div>
                        <div className="row2_box2_info">
                            <div className="box2_p1">Mentorship</div>
                            <div className="box2_p2">Unlock Guidance</div>
                        </div>
                    </div>
                </div>
                <div className="row2">
                    <div className="box1">
                        <div className="row3_box1_pic"></div>
                        <div className="row2_box1_info">
                            <div className="box1_p1">Internships</div>
                            <div className="box1_p2">Gain Real-World Experience</div>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="row3_box2_pic"></div>
                        <div className="row2_box2_info">
                            <div className="box2_p1">Expand Your Horizons</div>
                            <div className="box2_p2">Unlock Opportunities, One Reward at a Time</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5 */}
            <div className="main_5">
                <div className="discov">Discover More</div>
            </div>

            {/* Section 6 */}
            <div className="main_6">
                <div className="main_6_one">Contact Us</div>
                <div className="main_6_two">
                    <div className="call">
                        <div className="call_pic"></div>
                        <p className="call_p1">Call Us</p>
                        <p className="call_p2">Let's Chat</p>
                    </div>
                    <div className="email">
                        <div className="email_pic"></div>
                        <p className="email_p1">Email Us</p>
                        <p className="email_p2">Get in Touch</p>
                    </div>
                    <div className="visit">
                        <div className="visit_pic"></div>
                        <p className="visit_p1">Visit Us</p>
                        <p className="visit_p2">Drop By</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
