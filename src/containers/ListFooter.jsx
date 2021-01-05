import { connect } from 'react-redux';
import ListFooter from '../components/ListFooter';
import { addCard } from '../reducers/actions';

const mapDispatchToProps = {
    addCard,
};

export default connect(null, mapDispatchToProps)(ListFooter);
