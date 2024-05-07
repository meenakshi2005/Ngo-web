import React, { useState } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/all.min.css";
import "../assets/css/animate.css";
import "../components/donation.css";
import Footer from "./Footer";

function Donation() {
  // State variables to manage form inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      email,
      phoneNumber,
      address,
    });
    // Reset form fields after submission
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
  };

  return (
    <section className="bg-light">
      <div className="container">
        {/* <div className="row d-flex justify-content-center align-items-center"> */}
          {/* <div className="col"> */}
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="./images/vidya.jpg"
                    alt="Sample photo"
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-3 text-black">
                    {/* <h1 className="form-title">Donation Form</h1> */}
                    <form onSubmit={handleSubmit}>
                      <div className="main-user-info">
                        <div className="user-input-box">
                          <label htmlFor="fullName">Full Name</label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter Full Name"
                          />
                        </div>
                        <div className="user-input-box">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                          />
                        </div>
                        <div className="user-input-box">
                          <label htmlFor="phoneNumber">Phone Number</label>
                          <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter Phone Number"
                          />
                        </div>
                        <div className="user-input-box">
                          <label htmlFor="address">Address</label>
                          <input
                            type="address"
                            id="address"
                            name="confirmPassword"
                            placeholder="Address"
                          />
                        </div>
                        <div class="user-input-box">
                          <label htmlFor="items">Select the donation:</label>
                          <select
                            className="form-control"
                            id="items"
                            name="items"
                            style={{height: "calc(2.60rem + 2px)",backgroundColor:"white",fontSize:"inherit"}}
                          >
                            <option value="books">Select the donation</option>
                            <option value="clothes">Clothes</option>
                            <option value="money">Money</option>
                            <option value="shoes">Shoes</option>
                          </select>
                        </div>
                      </div>
                      <div style={{ marginTop: "10px" }} className="row">
                {/* <div style={{ paddingTop: "10px" }} className="col-sm-3">
                  <label></label>
                </div> */}
                <div className="col-sm-8">
                  <button className="btn btn-primary btn-mg">
                    Send Donation
                  </button>
                </div>
              </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
     
      </div>
       
  <Footer />
  </section>
  );
}

export default Donation;
