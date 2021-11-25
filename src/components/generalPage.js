import {getBooksAction} from '../redux/actions/books.action'
import {connect} from 'react-redux';
import {Page} from '../Page';

const mapStateToProps = (state) => {
    return {state: state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetBooks: (state, merge, load) => {
            dispatch(getBooksAction(state, merge, load))
        }
    }
}

export const GeneralPage = connect(mapStateToProps, mapDispatchToProps)(Page)

