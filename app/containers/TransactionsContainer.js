// @flow
import { connect } from 'react-redux';
import Transactions from '../components/transaction';

const mapStateToProps = (state, props) => {
    return {
        transCats: state.transCats,
        props
    };
};

const TransactionsContainer = connect(mapStateToProps)(Transactions);

export default TransactionsContainer;
