import './errorBoundary.scss';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  componentDidCatch() { //когда в одном из компонентов рендер возникнет ошибка
    this.setState({hasError: true});
  }

  render() {
    if(this.state.hasError){
      return <ErrorIndicator/>
    }
    return this.props.children;
  }
}
