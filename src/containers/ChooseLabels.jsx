import { connect } from 'react-redux';
import ChooseLabels from '../components/EditCardModal/AddLabel/ChooseLabels';
import { deleteLabel } from '../reducers/thunks';
const mapStateToProps = (state) => {
  return {
    allLabels: state.labels.items,
  };
};

const mapDispatchToProps = {
  deleteLabel,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLabels);
