import { connect } from "react-redux";
import MainPage from '../pages/MainPage';

const mapStateToProps = state => {
    return {
      lists: state.lists.items
    }
}

export default connect(mapStateToProps)(MainPage)
