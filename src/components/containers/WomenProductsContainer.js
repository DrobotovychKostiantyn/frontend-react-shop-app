import { connect } from 'react-redux';
import View from '../Products/List';

import { getWomenProducts } from '../../modules/selectors';

const mapStateToProps = state => ({
  list: getWomenProducts(state),
});

export default connect(mapStateToProps)(View);
