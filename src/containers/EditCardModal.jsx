import { connect } from 'react-redux';
import EditCardModal from '../pages/EditCardModal';
import { deleteCard } from '../reducers/thunks';

const mapDispatchToProps = {
    deleteCard,
};

export default connect(null, mapDispatchToProps)(EditCardModal);
