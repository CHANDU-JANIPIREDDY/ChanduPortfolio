import React from "react";

function Contact() {
  return (
    <section className="contact-container" id="contact">
      <div className="Contact-content">
        <h1 className="about-heading1">CONTACT US</h1>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <form action="https://formsubmit.co/chandujanipireddy123@gmail.com" method="post">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Write your message here..." required></textarea>
                </div>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://optinmonster.com/wp-content/uploads/2016/10/Anatomy-of-the-Perfect-Thank-You-Page.png" />
                <div className="form-button">
                  <button type="submit">Send Message</button>
                </div>
                <div className="form-footer">
                  <p>Need help? <a href="mailto:support@example.com">Contact support</a></p>
                </div>
                <div className="text-center">
                  <a href="https://www.instagram.com/_chandu__104/?__pwa=1" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram contact-icon"></i></a>
                  <a href="https://www.linkedin.com/in/chandu-janipireddy/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in contact-icon"></i></a>
                  <a href="https://www.facebook.com/in/chandu-janipireddy/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook contact-icon"></i></a>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-5">
              <img
                src="https://res.cloudinary.com/ddaults7y/image/upload/v1735102326/WhatsApp_Image_2024-12-25_at_10.21.26_AM_h4hi90.jpg"
                alt="Contact"
                className="contact-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
