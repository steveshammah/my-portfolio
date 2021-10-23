import "./Contact.scss";
import {
  EmailTwoTone,
  FlagTwoTone,
  Home,
  LocationCity,
  PhoneAndroidRounded,
} from "@material-ui/icons";

export const Contact = () => {
  const handleSubmit = (e) => {
    // Prevent form from submitting
    e.preventDefaultt();
  };
  return (
    <div id='contact' className='contactMe'>
      <h2>Get In Touch</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio magni
        veniam animi, quibusdam cupiditate saepe aspernatur et fuga explicabo?
        Voluptatum? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Hic nam incidunt blanditiis tenetur doloremque nulla.
      </p>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <span>
            <input type='text' placeholder='Name' required />{" "}
            <input type='email' placeholder='Email' required />
          </span>
          <textarea
            name=''
            id=''
            cols='80'
            rows='15'
            placeholder='Message'
            required></textarea>

          <button>Send Message</button>
        </form>

        <div className='formText'>
          <span>
            <Home className='icon' /> Naivasha Road.
          </span>
          <span>
            <LocationCity className='icon' /> Nairobi.
          </span>
          <span>
            <FlagTwoTone className='icon' /> Kenya.
          </span>

          <span>
            <PhoneAndroidRounded className='icon' /> +254 795 058 630.
          </span>
          <span>
            <EmailTwoTone className='icon' /> Shammahsteve.o@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};
