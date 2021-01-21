import { connect } from 'react-redux';
import EditCardModal from '../pages/EditCardModal';
import { deleteCard } from '../reducers/actions';

const mapDispatchToProps = {
    deleteCard,
};

export default connect(null, mapDispatchToProps)(EditCardModal);
