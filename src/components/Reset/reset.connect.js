import { connect } from "react-redux";

import Reset from "./Reset";
import { resetValue } from "../../store/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    resetValue: () => dispatch(resetValue()),
  };
};

export default connect(null, mapDispatchToProps)(Reset);
