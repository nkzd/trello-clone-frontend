import { connect } from 'react-redux';
import AddToCard from '../components/EditCardModal/AddToCard';
import { editCard } from '../reducers/thunks';

const mapDispatchToProps = {
  editCard,
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists.items,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCard);
