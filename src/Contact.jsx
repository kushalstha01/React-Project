import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name ${data.fullname}. Mobile Nunmber ${data.phoneNo}. Email ${data.email} . Message ${data.message} `
    );
  };
  return (
    <>
      <div className="my-3">
        <h1 className="text-center mt-5">Contact Us</h1>
      </div>
      <div className="container conatiner_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  // placeholder="Enter your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phoneNo"
                  value={data.phoneNo}
                  onChange={InputEvent}
                  // placeholder="Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  // placeholder="Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12 mb-5">
                <button type="submit" class="btn btn-outline-secondary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
