import { connect } from 'react-redux';
import AddToCard from '../components/EditCardModal/AddToCard';
import { editCard } from '../reducers/actions';

const mapDispatchToProps = {
  editCard,
};

export default connect(null, mapDispatchToProps)(AddToCard);
