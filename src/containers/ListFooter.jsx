import { connect } from 'react-redux';
import ListFooter from '../components/ListFooter';
import { addCard, deleteList } from '../reducers/actions';

const mapDispatchToProps = {
    addCard,
    deleteList
};

export default connect(null, mapDispatchToProps)(ListFooter);
