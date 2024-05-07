import React, { useEffect } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/all.min.css";
import "../assets/css/animate.css";
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAngleDoubleRight, faUser, faSearchDollar, faDonate, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

// import About from './About';

function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <React.Fragment>
      {/* Slider */}
     {/* Slider */}
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  {/* <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/slider-1.jpg" className="d-block w-100" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
      <h1 className="slider-title">Most Stylish Free Travel Website</h1>
      <p className="text-lowercase" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
      </div>
    </div>
  </div>
</div>

      {/* About Us Section */}
      <div className="about-us container-fluid">
        <div className="container">
          <div className="row natur-row no-margin w-100">
            <div className="text-part col-md-6">
              <h2>About Our Charity</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius faucibus ligula non congue. Suspendisse at pretium massa, sit amet vulputate nibh. Nam posuere eros dolor. Donec vel arcu sagittis, pretium nisl.</p>
              <p>Cras faucibus laoreet nibh, sit amet tincidunt leo mollis in. Etiam eu mauris metus. Nulla facilisi. Etiam vestibulum, nisi et convallis elementum, leo orci aliquam metus, id posuere massa neque vitae arcu.</p>
              <p>Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum sapien, eget tempor justo. Aenean porttitor nibh metus, sollicitudin egestas metus posuere et. Fusce egestas volutpat metus, in sodales sem bibendum porta. Nunc hendrerit nunc sit amet tellus posuere, at malesuada sem gravida. Integer maximus ultricies augue, at dapibus elit bibendum consequat. Cras faucibus tellus eleifend, fermentum purus in, dapibus sapien. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida vestibulum, urna justo posuere ante, id pretium massa arcu sed mi. Nunc a sollicitudin sem. Duis tempus.</p>
            </div>
            <div className="image-part col-md-6">
              <div className="about-quick-box row">
                <div className="col-md-6">
                  <div className="about-qcard">
                    <FontAwesomeIcon icon={faUser} style={{height:"50px",color:"#42d288"}}/>
                    <p>Become a Volunteer</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-qcard">
                    <FontAwesomeIcon icon={faSearchDollar} className="red" style={{height:"50px"}} />
                    <p>Quick Fundraise</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-qcard">
                    <FontAwesomeIcon icon={faDonate} className="yell"style={{height:"50px"}} />
                    <p>Give Donation</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-qcard">
                    <FontAwesomeIcon icon={faHandsHelping} className="blu" style={{height:"50px"}} />
                    <p>Help Someone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Events */}
      <section className="events">
        <div className="container">
          <div className="session-title row">
            <h2>Popular Causes</h2>
            <p>We are a non-profit & Charity raising money for child education</p> 
          </div>
          <div className="event-row row">
            {/* Example event box */}
            <div className="col-md-4 col-sm-6">
           <div className=" shadow-lg p-3 mb-5 bg-white rounded d-flex p-3 w-100 flex-column justify-content-center align-items-center event-box">
          <img src="./images/image_01.jpg" alt="Child Education in Africa" />
              <h4
                style={{
                  fontSize: "1.1rem",
                  padding: "8px",
                }}
              >
                Child Education in Africa
              </h4>
              <p
                style={{
                  textAlign: "center",
                }}
                className="raises"
              >
                <span style={{ color: "green" }}>Raised: $34,425</span> /
                $500,000
              </p>
              <p
                style={{
                  fontSize: "13px",
                  padding: "6px",
                }}
                className="desic"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
              <button className="btn btn-success btn-sm">Donate Now</button>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
          <div className=" shadow-lg p-3 mb-5 bg-white rounded d-flex p-3 w-100 flex-column justify-content-center align-items-center event-box">
          <img src="./images/image_02.jpg" alt="Child Education in Africa" />
              <h4
                style={{
                  fontSize: "1.1rem",
                  padding: "8px",
                }}
              >
                Child Education in Africa
              </h4>
              <p
                style={{
                  textAlign: "center",
                }}
                className="raises"
              >
                <span style={{ color: "green" }}>Raised: $34,425</span> /
                $500,000
              </p>
              <p
                style={{
                  fontSize: "13px",
                  padding: "6px",
                }}
                className="desic"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
              <button className="btn btn-success btn-sm">Donate Now</button>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
          <div className=" shadow-lg p-3 mb-5 bg-white rounded d-flex p-3 w-100 flex-column justify-content-center align-items-center event-box">
          <img src="./images/image_05.jpg" alt="Child Education in Africa" />
              <h4
                style={{
                  fontSize: "1.1rem",
                  padding: "8px",
                }}
              >
                Child Education in Africa
              </h4>
              <p
                style={{
                  textAlign: "center",
                }}
                className="raises"
              >
                <span style={{ color: "green" }}>Raised: $34,425</span> /
                $500,000
              </p>
              <p
                style={{
                  fontSize: "13px",
                  padding: "6px",
                }}
                className="desic"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
              <button className="btn btn-success btn-sm">Donate Now</button>
            </div>
          </div>
            
            {/* Repeat similar event boxes for other causes */}
          </div>
        </div>
      </section>
      
      {/* Charity Number */}
      <div className="doctor-message">
        <div className="inner-lay">
          <div className="container">
            <div className="row session-title">
              <h2>Our Achievements in Numbers</h2>
              <p>We can talk for a long time about advantages of our Dental clinic before other medical treatment facilities. But you can read the following facts in order to make sure of all pluses of our clinic:</p>
            </div>
            <div className="row">
              <div className="col-sm-3 numb">
                <h3>12+</h3>
                <span>YEARS OF EXPERIENCE</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>1812+</h3>
                <span>HAPPY CHILDRENS</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>52+</h3>
                <span>EVENTS</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>48+</h3>
                <span>FUNT RAISED</span>
              </div>
              {/* Repeat similar number blocks for other achievements */}
            </div>
          </div>
        </div>
      </div>
         
      {/* Our Team */}
      <section className="our-team team-11">
        <div className="container">
          <div className="session-title row">
            <h2>Meet our Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit</p>
          </div>
          <div className="row team-row">
            {/* Example team member */}
            <div className="col-md-3 col-sm-6">
              <div className="single-usr">
                <img src="./images/team-memb1.jpg" alt="David Kanuel" />
                <div className="det-o">
                  <h4>David Kanuel</h4>
                  <i>CEO</i>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-usr">
                <img src="./images/team-memb2.jpg" alt="David Kanuel" />
                <div className="det-o">
                  <h4>David Kanuel</h4>
                  <i>CEO</i>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-usr">
                <img src="./images/team-memb3.jpg" alt="David Kanuel" />
                <div className="det-o">
                  <h4>David Kanuel</h4>
                  <i>CEO</i>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-usr">
                <img src="./images/team-memb4.jpg" alt="David Kanuel" />
                <div className="det-o">
                  <h4>David Kanuel</h4>
                  <i>CEO</i>
                </div>
              </div>
            </div>
            {/* Repeat similar team members */}
          </div>
        </div>
      </section>
         
      {/* Our Blog */}
      <section className="our-blog">
        <div className="container">
          <div className="row session-title">
            <h2>Our Blog</h2>
            <p>Take a look at what people say about us</p>
          </div>
          <div className="blog-row row">
            {/* Example blog post */}
            <div className="col-md-4 col-sm-6">
              <div className="single-blog">
                <figure>
                <img src="./images/image_01.jpg" alt="Child Education in Africa" />
                </figure>
                <div className="blog-detail">
                  <small>By Admin | August 10 2018</small>
                  <h4>Methods of Recruitments</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
                  <div className="link">
                    <a href="">Read more </a><i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-blog">
                <figure>
                <img src="./images/image_02.jpg" alt="Child Education in Africa" />
                </figure>
                <div className="blog-detail">
                  <small>By Admin | August 10 2018</small>
                  <h4>Methods of Recruitments</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
                  <div className="link">
                    <a href="">Read more </a><i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-blog">
                <figure>
                <img src="./images/image_03.jpg" alt="Child Education in Africa" />
                </figure>
                <div className="blog-detail">
                  <small>By Admin | August 10 2018</small>
                  <h4>Methods of Recruitments</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
                  <div className="link">
                    <a href="">Read more </a><i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat similar blog posts */}
          </div>
        </div>
      </section>
<Footer />
    </React.Fragment>
  );
}

export default Home;
