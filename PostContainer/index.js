import React, { Component } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

export default class PostContainer extends Component {
  static defaultProps = {
    onPress: ()=> {},
  };

  constructor(props) {
    super(props);
    this.main = React.createRef();
  }

  onPressImage = () => {
    const { onPress, post } = this.props;

    this.main.current.measure((fx, fy, width, height, pageX, pageY) => {
      onPress(post, { width, height, pageX, pageY });
    });
  }

  render() {
    const { post: { image, title } } = this.props;

    return (
      <View style={styles.main} ref={this.main}>
        <TouchableOpacity onPress={this.onPressImage} activeOpacity={0.9}>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    marginBottom: 30,
    paddingBottom: 10,
  },
  image: {
    width,
    height: 300,
  },
  title: {
    margin: 10,
    color: '#ccc',
  }
});
