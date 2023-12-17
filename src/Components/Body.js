import "./Body.css";
const Body = () => {
  return (
    <div className="body_container">
      <img
        src="https://thumbs.dreamstime.com/z/business-people-discussing-work-matters-table-office-business-people-discussing-work-matters-table-office-professional-142006669.jpg"
        class="body_1_img"
      ></img>
      <div className="body_Second_Container">
        <div className="body_Second_Container_main">
          <h2 className="body_heading">Think Wealth. Think Message.</h2>
          <p className="para_1">
            We are open from 9:00 am to 6:00 pm from Monday to sunday.If you
            would like to schedule an appointment
            <br />
            <span>with us,Please contact us at 987-654-3210 today!</span>
          </p>
          <div className="para_btn">
            <button>LEARN MORE ABOUT US </button>
            <button>CONTACT US TODAY</button>
          </div>
        </div>
      </div>
      <div className="body_para_container">
        <p id="para_first">
            Are you looking for professional,registered message therapist?Sample Message Therapy has 4 registered message therapist who can provide clinical <br/> message. 
        </p>
        
        <p id="para_second">
            We are committed to you a long term health and well-being.Our multi diciplinary clinic provide a balance approach to a healty lifestyle.Enhance your <br/>health and improve  your performance with our treatments.
        </p>
        <p id="third_para">We welcome you to come and explore all the benefits you'll enjoy as one of our valued guests.Our professional staff is committedto offering the <br/> best message theraphy in Mainland. </p>
      </div>
      <hr className="line"/>
      <div className="address">
        <p className="address_name">Family Wellness Message Therapy</p>
        <p className="addressnumber">
            9876 Main Street Suit 123, Mainland,ML12345
        </p>
        <p className="adressPhonePhone">Phone: 987.654.3210</p>
      </div>
    </div>
  );
};
export default Body;
