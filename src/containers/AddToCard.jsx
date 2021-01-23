import { connect } from 'react-redux';
import AddToCard from '../components/EditCardModal/AddToCard';
import { editCard } from '../reducers/thunks';

const mapDispatchToProps = {
  editCard,
};

export default connect(null, mapDispatchToProps)(AddToCard);
