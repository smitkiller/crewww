import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { loadPage } from '../../actions/page';
import { getPageById } from '../../reducers/pages';
import EditForm from '../../components/Pages/EditForm';
import Header from '../../components/Header';
import _ from 'lodash'; 

class EditPageContainer extends Component {
  static propTypes = {
    id: PropTypes.string,
    page: PropTypes.object.isRequired
  //  onLoadPage: PropTypes.func.isRequired
  }
/*
  static need = [
    (params) => (loadPage(params.id))
  ]

  shouldComponentUpdate(nextProps) {
    return this.props.page !== nextProps.page;
  }

  componentDidMount() {
    const { onLoadPage, params: { id } } = this.props

    onLoadPage(id)

  }
*/

  render() {
   // console.log('sssssssssssssssssssss',this.props.params.id);

    return (
      <div>
        <Header 
          txtTitle="New"
        />
        <EditForm
            id={this.props.params.id}
            page={this.props.page}
        />
      </div>
    )
  }
}


export default connect(
  (state, ownProps) => ({ page: getPageById(state, ownProps.params.id)})
)(EditPageContainer)

/*
export default connect(
  (state, ownProps) => ({ page: getPageById(state, ownProps.params.id)}),
  { onLoadPage: loadPage }
)(EditPageContainer)
*/