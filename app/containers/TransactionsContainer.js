// @flow
import { connect } from 'react-redux';
import Transactions from '../components/transaction';

const mapStateToProps = (state, props) => {
    return {
        transCats: state.transCats,
        props
    };
};

const mapDispatchToProps = () => {
    return {

    };
};

const TransactionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Transactions);

export default TransactionsContainer;
