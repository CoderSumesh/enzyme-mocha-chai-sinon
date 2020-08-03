import { connect } from "react-redux";

import Count from "./Count";

const mapStateToProps = (state) => {
  const { count } = state;
  return { count };
};

export default connect(mapStateToProps)(Count);
