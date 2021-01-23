import { connect } from 'react-redux';
import AddAnotherList from '../components/AddAnotherList';
import { addList } from '../reducers/thunks';

const mapDispatchToProps = {
    addList,
};

export default connect(null, mapDispatchToProps)(AddAnotherList);
