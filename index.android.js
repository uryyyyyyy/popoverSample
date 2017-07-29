/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'rgb(43, 186, 180)',
  },
  button: {
    borderRadius: 4,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ccc',
    borderColor: '#333',
    borderWidth: 1,
  },
  buttonText: {
  }
});

class AppApp extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      buttonRect: {},
    }
  }

  showPopover = () => {
    this.refs.button.measure((ox, oy, width, height, px, py) => {
      this.setState({
        isVisible: true,
        buttonRect: {x: px, y: py, width: width, height: height}
      });
    });
  }

  closePopover = (e: any) => {
    console.log(e.nativeEvent.locationX)
    console.log(e.nativeEvent.locationY)
    console.log(this.state.buttonRect)
    this.setState({isVisible: false});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight ref='button' style={styles.button} onPress={this.showPopover}>
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableHighlight>
        <Popover.default
          isVisible={this.state.isVisible}
          fromRect={this.state.buttonRect}
          onClose={this.closePopover}>
          <Text>I'm the content of this popover!. I'm the content of this popover!. I'm the content of this popover!</Text>
        </Popover.default>
      </View>
    );
  }
}
AppRegistry.registerComponent('PopoverSample', () => AppApp)