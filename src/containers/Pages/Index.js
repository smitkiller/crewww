import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPages,deletePage } from '../../actions';
import {Pages,Header} from '../../components';

class PagesContainer extends Component {
  static propTypes = {
    onLoadPages: PropTypes.func.isRequired,
    onDelete:PropTypes.func
  }

  static need = [
    loadPages
  ]

  shouldComponentUpdate(nextProps) {
    return this.props.pages !== nextProps.pages;
  }

  onReloadPages = () => {
    this.props.onLoadPages()
  }

  onRemove = (id) => {
    this.props.onDelete(id)
  }

  componentDidMount() {
    this.onReloadPages()
  }


  render() {
    return (
      <div>
      <Header txtTitle='Pages'/>
      <Pages
        pages={this.props.pages}
        onReloadPages={this.onReloadPages}
        onRemove={this.onRemove} />
      </div>
    )
  }
}

export default connect(
  (state) => ({ pages: state.pages }),
  { onLoadPages: loadPages,onDelete:deletePage }
)(PagesContainer)
