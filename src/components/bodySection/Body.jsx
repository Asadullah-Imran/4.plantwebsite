import "./Body.css";
import Activity from "./activitySection/Activity";
import Listing from "./listingSection/Listing";
import Top from "./topSection/Top";
const Body = () => {
  return (
    <div className="mainContent">
      <Top />

      <div className="bottom flex">
        <Listing />
        <Activity />
      </div>
    </div>
  );
};

export default Body;
