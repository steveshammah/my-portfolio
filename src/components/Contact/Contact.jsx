import "./Contact.scss";
import {
  EmailTwoTone,
  LocationOn,
  PhoneAndroidRounded,
} from "@material-ui/icons";

export const Contact = () => {
  const handleSubmit = (e) => {
    // Prevent form from submitting
    e.preventDefaultt();
  };
  return (
    <section id='contact' className='contactMe'>
      <h2>Get In Touch</h2>
      <p>
        Have any question? Would you like to work with me? Have any criticism on
        what you see? Fear not. Hit me up and I will get back to you ASAP.
      </p>

      <div className='formContainer'>
        <div className='formText'>
          <span>
            <PhoneAndroidRounded className='icon' />
            <h5>Phone</h5>
            <p>+254 795 058 630</p>
          </span>
          <span>
            <EmailTwoTone className='icon' />
            <h5>Email</h5>
            <p>Shammahsteve.o@gmail.com</p>
          </span>
          <span>
            <LocationOn className='icon' />
            <h5>Location</h5>
            <p>Nairobi, Kenya</p>
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <span>
            <input type='text' placeholder='Name' required />
            <input type='text' placeholder='Subject' />
            <input type='email' placeholder='Email' required />
          </span>
          <div>
            <textarea placeholder='Message' required></textarea>

            <button>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};
