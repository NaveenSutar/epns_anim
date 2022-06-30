import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions
} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;

export default function Emoji({emoji, name, onPress, style}) {
  return (
    <TouchableOpacity style={[style, styles.emojiContainer]} onPress={onPress}>
      <Animated.Image width={width/12} style={[styles.emoji]} source={emoji} />
      <Text style={styles.emojiText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  emojiContainer: {
    alignItems:'center'
  },

  emoji: {
    height: width/12,
    width: width/12,
  },

  emojiText: {
    color: 'grey',
    marginTop: 5,
    fontSize: 10,
  },
});
