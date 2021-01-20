import { connect } from 'react-redux';
import LabelList from '../components/LabelList';
const mapStateToProps = (state) => {
  return {
    allLabels: state.labels.items,
  };
};

export default connect(mapStateToProps)(LabelList);
