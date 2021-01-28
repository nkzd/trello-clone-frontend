import { connect } from 'react-redux';
import MainPage from '../pages/MainPage';
import { reorderCards } from '../reducers/thunks';

const mapStateToProps = (state) => {
  return {
    lists: state.lists.items,
  };
};

const mapDispatchToProps = {
  reorderCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
