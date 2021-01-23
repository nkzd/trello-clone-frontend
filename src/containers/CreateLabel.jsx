import { connect } from 'react-redux';
import CreateLabel from '../components/EditCardModal/AddLabel/CreateLabel'
import { createLabel } from '../reducers/thunks';

const mapDispatchToProps = {
    createLabel
};

export default connect(null, mapDispatchToProps)(CreateLabel);
