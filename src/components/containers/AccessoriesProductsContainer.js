import { connect } from 'react-redux';
import { getAccessoriesProducts } from '../../modules/selectors';

import View from '../Products/List';

const mapStateToProps = state => ({
  list: getAccessoriesProducts(state),
});

export default connect(mapStateToProps)(View);
