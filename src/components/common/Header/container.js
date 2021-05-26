import { connect } from "react-redux";
import Header from "./component";

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch, props) => ({

})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Header);