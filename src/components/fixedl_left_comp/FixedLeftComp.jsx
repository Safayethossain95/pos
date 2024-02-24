import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "../../features/counter/counterSlice";
import { decrementitem, incrementitem } from "../../features/counter/itemSlice";

const FixedLeftComp = () => {
  const items = useSelector((state) => state.itemnumber.item);
  const dispatch = useDispatch();

  const incrementCount = (index) => {
    dispatch(incrementitem(index));
  };
  const decrementCount = (index) => {
    dispatch(decrementitem(index));
  };

  // Function to decrement count of an item at a given index
  //   const decrementCount = (index) => {
  //     const newItems = [...items];
  //     if (newItems[index].count > 0) {
  //       newItems[index].count--;
  //       setItems(newItems);
  //     }
  //   };
  return (
    <>
      <div className="navbar flex-1">
        <img src="./assets/images/bars.png" alt="" />
        <button>
          <img src="./assets/images/note_icon.png" alt="" />
          Note
        </button>
        <button>
          <img src="./assets/images/shipping_icon.png" alt="" />
          Shipping
        </button>
        <button>
          <img src="./assets/images/hold_icon.png" alt="" />
          Hold Orders
        </button>
        <button>
          <img src="./assets/images/newitem_icon.png" alt="" />
          New Item
        </button>
      </div>
      <div className="user">
        <div className="div">
          <img src="./assets/images/user_icon.png" alt="" />
          <p>Steve Jobs</p>
        </div>
        <div className="div2">
          <img src="./assets/images/plus_sign_icon.png" alt="" />
        </div>
      </div>
      <div className="cart">
        <table>
          <thead></thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src="./assets/images/edit_icon.png" alt="" />
                </td>
                <td>
                  <p>{item.name}</p>
                </td>
                <td>
                  <p>$ {item.price}</p>
                </td>
                <td>
                  <div className="imgmarginzero d-flex align-items-center justify-content-between">
                    <img
                      src="./assets/images/minusone_icon.png"
                      onClick={() => decrementCount(index)}
                      alt=""
                    />
                    <p style={{ margin: "0 20px" }}>{item.count}</p>
                    <img
                      src="./assets/images/plusone_icon.png"
                      onClick={() => incrementCount(index)}
                      alt=""
                    />
                  </div>
                </td>
                <td className="last" style={{ textAlign: "right" }}>
                  <p>$ {(item.price * item.count).toFixed(2)}</p>
                </td>
                <td className="reallast">
                  <img
                    style={{ marginRight: "0px!important" }}
                    src="./assets/images/delete_icon.png"
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FixedLeftComp;
