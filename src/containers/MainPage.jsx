import { connect } from 'react-redux';
import MainPage from '../pages/MainPage';
import { reorderCards } from '../reducers/actions';
//items je premapiran u lists na krajnjoj komponenti
const mapStateToProps = (state) => {
  return {
    lists: state.lists.items,
  };
};

const mapDispatchToProps = {
  reorderCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
