import { BsArrowRightShort } from "react-icons/bs";
import "./Activity.css";
import user5 from "/user13.jpg";
import user1 from "/user5.jpg";
import user2 from "/user6.jpg";
import user3 from "/user7.jpg";
import user4 from "/user8.jpg";

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />{" "}
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="image" />
          <div className="customerDetails">
            <span className="name">Asadullah Imran</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="image" />
          <div className="customerDetails">
            <span className="name">Tawfiqur Rahman</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">18 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="image" />
          <div className="customerDetails">
            <span className="name">Pulok Ahsan</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">1 hr ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="image" />
          <div className="customerDetails">
            <span className="name">Sakib Khan</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">14 hr ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user5} alt="image" />
          <div className="customerDetails">
            <span className="name">Apu Bishwash</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">1 day ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
