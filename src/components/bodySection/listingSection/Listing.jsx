import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import "./Listing.css";
import user1 from "/user1.jpg";
import user2 from "/user2.jpg";
import user3 from "/user3.jpg";
import user4 from "/user4.jpg";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listing</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src="./pic2.png" alt="image name" />
          <h3>Snake Plant</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src="./pic3.png" alt="image name" />
          <h3>Peperomia</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src="./pic4.png" alt="image name" />
          <h3>Sanke Plant</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src="./pic5.png" alt="image name" />
          <h3>Pepper face</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="user name" />
              <img src={user2} alt="user name" />
              <img src={user3} alt="user name" />
              <img src={user4} alt="user name" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="user name" />
              <img src={user2} alt="user name" />
              <img src={user3} alt="user name" />
              <img src={user4} alt="user name" />
            </div>
            <div className="cardText">
              <span>
                28,972 Plant sold <br />
                <small>
                  26 Sellers <span className="date">31 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
