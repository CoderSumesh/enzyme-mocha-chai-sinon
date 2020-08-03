import { connect } from "react-redux";

import Decrement from "./Decrement";

import { decrementValue } from "../../store/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    decrementValue: () => dispatch(decrementValue()),
  };
};

export default connect(null, mapDispatchToProps)(Decrement);
