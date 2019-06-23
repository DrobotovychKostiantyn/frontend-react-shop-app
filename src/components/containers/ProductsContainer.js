import { connect } from 'react-redux';
import { getAllProducts } from '../../modules/selectors';

import View from '../Products/List';

const mapStateToProps = state => ({
  list: getAllProducts(state),
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(View);
