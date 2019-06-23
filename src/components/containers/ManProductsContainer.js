import { connect } from 'react-redux';
import { getManProducts } from '../../modules/selectors';
import View from '../Products/List';

const mapStateToProps = state => ({
  list: getManProducts(state),
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(View);
