import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div id="container1">
        <div id="header">
          <div className="part">
            <div className="left"><i className="fa-solid fa-droplet"></i></div>
            <div className="left">TokenUp</div>
          </div>
          <div className="part">
            <div className="right"><Link to="/">Home</Link></div>
            <div className="right"><Link to="/about">About</Link></div>
            <div className="right"><Link to="/products">Products</Link></div>
            <div className="right"><Link to="/contact">Contact</Link></div>
            <div className="right"><button><Link to="/login">Login</Link></button></div>
          </div>
        </div>
        <div id="header2">
          <div id="left2">
            <div id="para1">Earn Tokens for<br />Academic<br />Excellence</div>
            <div id="para2">
              Unlock exclusive rewards and incentivize your learning<br />
              journey with our Token-based Reward System. Earn tokens<br />
              for your academic achievements and redeem them for<br />
              valuable prizes
            </div>
            <div id="para3">
              <div><button className="firstbutton">Earn Tokens</button></div>
              <div><button className="firstbutton">Redeem Rewards</button></div>
            </div>
          </div>
          <div id="right2"></div>
        </div>
        <div id="header3">
          <div className="icon">Shell</div>
          <div className="icon">Ferrari</div>
          <div className="icon">Adidas</div>
          <div className="icon">Nike</div>
          <div className="icon">Apple</div>
          <div className="icon">Microsoft</div>
        </div>
      </div>
      <div id="main">
        <div id="main_box1">
          <div id="box1_left">
            <p id="p1">Gamifying Learning for<br />College Students</p>
            <p id="p2">
              Our platform transforms academic success into tangible rewards,<br />
              motivating students to excel and reach new heights in their studies
            </p>
            <p id="p3">Redeem Tokens for Prizes</p>
          </div>
          <div id="box1_right">
            <div id="box1_right_box">
              Earn Tokens for a wide range of achievements,<br />
              from high grades and extracurricular activities to<br />
              community service and leadership roles
            </div>
            <p id="p4">Exclusive Rewards</p>
          </div>
        </div>
        <div id="main_box2"></div>
        <div id="main_box3">
          <div id="main_box3_left">
            <p className="head">Unlock a world of<br />possibilities with<br />our Token-based</p>
            <p className="box3_p">Motivate Yourself to Succeed</p>
            <p className="box3_p">
              Our platform is designed to make learning fun and rewarding.<br />
              Earn tokens for your academic achievements, from acing<br />
              exams to participating in enriching extracurricular activities
            </p>
            <p className="box3_p">Transform Your Learning Journey with Tangible Rewards</p>
          </div>
          <div id="main_box3_right">
            <p className="head">Revolutionize Your<br />Academic Journey</p>
            <p className="box3_p">
              Unlock a new world of possibilities with our Token-based<br />
              Reward System. Earn tokens for your academic achievements<br />
              and unlock access to a curated selection
            </p>
            <div id="box3_pic"></div>
          </div>
        </div>
        <div id="main_box4">
          <div id="box4_left">
            <p className="main_box4_h1">Earn Tokens, Unlock Rewards</p>
            <p className="main_box4_p">
              Our platform is designed to inspire and motivate you to<br />
              excel in your studies. Earn tokens for your hard work<br />
              and dedication, and redeem them for a variety of<br />
              exciting prizes and experiences that will
            </p>
            <p className="main_box4_l">Redeem for Prizes</p>
          </div>
          <div id="box4_mid">
            <p className="main_box4_h1">Earn Tokens, Achieve More</p>
            <p className="main_box4_p">
              Unlock a world of exclusive rewards and incentives<br />
              with our Token-based Reward System
            </p>
            <p className="main_box4_l">Redeem Rewards</p>
          </div>
          <div id="box4_right">
            <div id="box4_img"></div>
            <p className="main_box4_p">Earn Tokens, Unlock Possibilities</p>
          </div>
        </div>
        <div id="main_box5">
          <div id="box5_left">
            <p className="box5_h">Revolutionize Your<br />Academic Experience</p>
            <p className="box5_p">
              Introducing the ultimate platform for college students<br />
              looking to amplify their learning journey. Our Token-based<br />
              Reward System gamifies education, allowing you to earn<br />
              tokens for your academic achievements and redeem them<br />
              for a curated selection of exclusive
            </p>
            <button className="box5_buttona">Redeem Tokens</button>
            <p className="box5_p">
              Earn tokens for excelling in your studies, participating in enriching<br />
              extracurricular activities, and contributing to your community. Redeem<br />
              your tokens for a variety of exciting prizes and unique opportunities that<br />
              will fuel your academic and personal growth
            </p>
            <p className="box5_p">
              Transform your learning journey with our innovative Token-based<br />
              Reward System. Earn tokens for your hard work and<br />
              dedication, and unlock access to a world of exclusive<br />
              rewards and experiences that will inspire you
            </p>
          </div>
          <div id="box5_right">
            <div id="box5_right_a">
              <p className="box5_pb">Earn and Redeem Tokens for Rewards</p>
              <button className="box5_buttonb">Redeem Tokens</button>
            </div>
            <div id="box5_right_b"></div>
            <div id="box5_right_c">
              <p className="box5_h1">Redeem</p>
              <p className="box5_pb">
                Earn tokens for your academic achievements and unlock a<br />
                world of exclusive rewards and opportunities. Our platform is<br />
                designed to motivate and inspire you to excel in your
              </p>
            </div>
          </div>
        </div>
        <div id="main_box6">
          <p id="box5_p">Revolutionize Your Learning Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
