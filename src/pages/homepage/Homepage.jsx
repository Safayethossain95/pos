import FixedLeftComp from "../../components/fixedl_left_comp/FixedLeftComp";
import RightMainComp from "../../components/right_main_comp/RightMainComp";
import "./Homepage.style.scss";
const Homepage = () => {
  return (
    <>
      <div className="main d-flex">
        <div className="left">
          <FixedLeftComp/>
        </div>
        <div className="right">
          <RightMainComp/>
        </div>
      </div>
    </>
  );
};

export default Homepage;
