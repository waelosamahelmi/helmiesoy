import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

// Import icons
import userIcon from "../../images/icon/user-balck-icon.svg";
import emailIcon from "../../images/icon/sms-balck-icon.svg";
import uploadIcon from "../../images/icon/upload-icon.svg";
import listIcon from "../../images/icon/list-icon.svg";
import messageIcon from "../../images/icon/messages-icon.svg";
import arrowIcon from "../../images/icon/rotate-arrow-black02.svg";

const ContactForm: React.FC = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    file: null as File | null,
  });

  const [validator] = useState(
    new SimpleReactValidator({ className: "errorMessage" })
  );

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value });

    if (validator.allValid()) validator.hideMessages();
    else validator.showMessages();
  };

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForms({ ...forms, file });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (validator.allValid()) {
      console.log("✅ Form submitted:", forms);
      alert("Thank you! We'll get back to you within 24 hours.");

      setForms({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        file: null,
      });
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  return (
    <form onSubmit={submitHandler} className="xb-contact-input-form">
      <div className="row mt-none-20">
        {/* Name */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-name"
              name="name"
              type="text"
              value={forms.name}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-name">Your Name*</label>
            <img src={userIcon} alt="user" />
          </div>
          {validator.message("name", forms.name, "required|alpha_space")}
        </div>

        {/* Email */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-email"
              name="email"
              type="email"
              value={forms.email}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-email">Email Address*</label>
            <img src={emailIcon} alt="email" />
          </div>
          {validator.message("email", forms.email, "required|email")}
        </div>

        {/* Company */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-company"
              name="company"
              type="text"
              value={forms.company}
              onChange={changeHandler}
            />
            <label htmlFor="author-company">Company (optional)</label>
            <img src={userIcon} alt="company" />
          </div>
        </div>

        {/* File Upload */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field xb-select-file">
            <input type="file" onChange={fileHandler} />
            <img src={uploadIcon} alt="upload" />
            <span>{forms.file ? forms.file.name : "Attach file..."}</span>
          </div>
        </div>

        {/* Service Interest */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field xb-select-field">
            <select
              name="service"
              value={forms.service}
              onChange={changeHandler}
              required
              className="nice-select"
            >
              <option value="">Service Interest*</option>
              <option value="Web Development">Web Development</option>
              <option value="Design Services">Design Services</option>
              <option value="3D Visualization">3D Visualization</option>
              <option value="Marketing Services">Marketing Services</option>
              <option value="Restaurant Solutions">Restaurant Solutions</option>
              <option value="AI Services">AI Services</option>
            </select>
            <img src={listIcon} alt="list" />
          </div>
          {validator.message("service", forms.service, "required")}
        </div>

        {/* Budget Range */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field xb-select-field">
            <select
              name="budget"
              value={forms.budget}
              onChange={changeHandler}
              className="nice-select"
            >
              <option value="">Budget Range (optional)</option>
              <option value="Under €2,000">Under €2,000</option>
              <option value="€2,000 - €5,000">€2,000 - €5,000</option>
              <option value="€5,000 - €10,000">€5,000 - €10,000</option>
              <option value="€10,000 - €25,000">€10,000 - €25,000</option>
              <option value="€25,000+">€25,000+</option>
            </select>
            <img src={listIcon} alt="list" />
          </div>
        </div>

        {/* Message */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field xb-massage-field">
            <textarea
              id="massage"
              name="message"
              value={forms.message}
              onChange={changeHandler}
              required
            ></textarea>
            <label htmlFor="massage">Project Description..</label>
            <img src={messageIcon} alt="message" />
          </div>
          {validator.message("message", forms.message, "required")}
        </div>
      </div>

      {/* Submit Button */}
      <div className="form-submit-btn mt-35">
        <button type="submit" className="thm-btn form-btn">
          Send Message
          <span className="xb-icon">
            <img src={arrowIcon} alt="arrow" />
            <img src={arrowIcon} alt="arrow" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
