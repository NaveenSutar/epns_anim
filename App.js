import React, {useRef} from 'react';

import {SafeAreaView, StyleSheet, Animated, View} from 'react-native';

import Emoji from './components/Emoji';

import emojis from './images';

const App = () => {
  const like = useRef(new Animated.Value(1)).current;
  const love = useRef(new Animated.Value(1)).current;
  const haha = useRef(new Animated.Value(1)).current;
  const wow = useRef(new Animated.Value(1)).current;
  const sad = useRef(new Animated.Value(1)).current;
  const angry = useRef(new Animated.Value(1)).current;

  const emojiRef = [like, love, haha, wow, sad, angry];

  handleAnim = emo => {
    Animated.timing(emo, {
      toValue: 1.5,
      duration: 750,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(emo, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }).start();
    }, 750);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.emojiContainer}>
        {emojiRef.map((emoji, index) => {
          return (
            <Emoji
              key={index}
              emoji={emojis[index].icon}
              name={emojis[index].name}
              style={{
                transform: [{scale: emoji}],
              }}
              onPress={() => {
                handleAnim(emoji);
              }}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emojiContainer: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
