import { connect } from "react-redux";

import Increment from "./Increment";
import { incrementValue } from "../../store/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    incrementValue: () => dispatch(incrementValue()),
  };
};

export default connect(null, mapDispatchToProps)(Increment);
