import { connect } from 'react-redux';
import { fetchData } from '../../store/actions/test';
import { selectData } from '../../store/selectors';
import Home from './Home';

const mapStateToProps = state => ({
  data: selectData(state),
});

export default connect(mapStateToProps, { fetchData })(Home);
