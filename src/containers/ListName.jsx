import { connect } from 'react-redux';
import ListName from '../components/ListName';
import { editList } from '../reducers/thunks';

const mapDispatchToProps = {
  editList,
};

export default connect(null, mapDispatchToProps)(ListName);
