import { connect } from 'react-redux';
import ChooseLabels from '../components/EditCardModal/AddLabel/ChooseLabels';
const mapStateToProps = (state) => {
  return {
    allLabels: state.labels.items,
  };
};

export default connect(mapStateToProps)(ChooseLabels);
