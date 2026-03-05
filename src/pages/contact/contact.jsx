import {
  GamilIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  PhoneIcon,
  SendIcon,
} from "../../assets/icons";
import { Header } from "../../components/header/header";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <Header />

      <main className="contact">
        <div className="contact_content">
          <span className="contact_title">Contact</span>
          <h2 className="contact_content_h2">Let's Work Together</h2>
          <h3 className="contact_content_h3">
            Have a project in mind? I'd love to hear from you. Send me a message
            and I'll respond as soon as possible
          </h3>
        </div>
        <div className="contact_wraper">
          <div className="get_in_touch">
            <h3 className="get_in_touch_h3">Get In Touch</h3>
            <div className="get_touch_card">
              <GamilIcon className={"icon get_touch_icon"} />
              <div className="get_touch_card_left">
                <h4 className="get_touch_card_left_h4">Email</h4>
                <h3 className="get_touch_card_left_p">
                  sattarovjabboro4@gmail.com
                </h3>
              </div>
            </div>
            <div className="get_touch_card">
              <PhoneIcon className={"icon get_touch_icon"} />
              <div className="get_touch_card_left">
                <h4 className="get_touch_card_left_h4">Phone</h4>
                <h3 className="get_touch_card_left_p">+998(99)2673121</h3>
              </div>
            </div>
            <div className="get_touch_card">
              <LocationIcon className={"icon get_touch_icon"} />
              <div className="get_touch_card_left">
                <h4 className="get_touch_card_left_h4">Location</h4>
                <h3 className="get_touch_card_left_p">Tashkent Uzbekistan</h3>
              </div>
            </div>
            <h3 className="contact_follow_me">Follow me</h3>
            <div className="contact_icons">
              <GithubIcon className="icon get_touch_icon" />
              <LinkedinIcon className="icon get_touch_icon" />
              <GamilIcon className="icon get_touch_icon" />
            </div>
            <div className="contact_availabilty">
              <h3 className="contact_availabilty_h3">Availability</h3>
              <p className="contact_availabilty_p">
                I'm currently available for freelance work and new opportunities
              </p>
              <h4 className="contact_availabilty_h4">
                <span className="contact_availabilty_dot"></span>
                Available for hire
              </h4>
            </div>
          </div>
          <div className="form_send_message">
            <h2 className="form_send_message_h2">Send Me a Message</h2>
            <div className="contact_form">
              <div className="contact_form_inline">
                <div className="contact_form_inline_box">
                  <label htmlFor="" className="contact_form_label">
                    Your Name
                  </label>
                  <input
                    placeholder="Your Name"
                    type="text"
                    className="contact_form_input"
                  />
                </div>
                <div className="contact_form_inline_box">
                  <label htmlFor="" className="contact_form_label">
                    Your Email
                  </label>
                  <input
                    placeholder="Your Email"
                    type="text"
                    className="contact_form_input"
                  />
                </div>
              </div>
              <div className="contact_form_column">
                <div className="contact_form_inline_box">
                  <label htmlFor="" className="contact_form_label">
                    Subject
                  </label>
                  <input
                    placeholder="Project Inquiry"
                    type="text"
                    className="contact_form_input"
                  />
                </div>
                <div className="contact_form_inline_box">
                  <label htmlFor="" className="contact_form_label">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project"
                    className="contact_form_textarea"
                    name=""
                    id=""
                  ></textarea>
                  <button className="contact_form_button">
                    Send Message
                    <SendIcon className={"icon contact_form_button_icon"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
