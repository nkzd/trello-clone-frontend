import { connect } from 'react-redux';
import AddAnotherList from '../components/AddAnotherList';
import { addList } from '../reducers/actions';

const mapDispatchToProps = {
    addList,
};

export default connect(null, mapDispatchToProps)(AddAnotherList);
