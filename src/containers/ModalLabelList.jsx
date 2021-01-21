import { connect } from 'react-redux';
import ModalLabelList from '../components/EditCardModal/ModalLabelList';
const mapStateToProps = (state) => {
  return {
    allLabels: state.labels.items,
  };
};

export default connect(mapStateToProps)(ModalLabelList);
