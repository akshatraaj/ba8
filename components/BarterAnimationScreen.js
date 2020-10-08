import React from 'react';
import {Image} from 'react-native';

export default class BarterAnimation extends React.Component {
  render() {
    return (
      <Image
      source={require('../assets/animations/home-icon.json')}
      style={{width:"90%",marginBottom:5}}
      autoPlay loop />
    )
  }
}
