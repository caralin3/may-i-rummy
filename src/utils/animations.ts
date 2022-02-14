import { Animated } from 'react-native';

export function createFlipAnim(flipAnimation: Animated.Value) {
  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [
      {
        rotateX: frontInterpolate,
      },
    ],
  };
  const backAnimatedStyle = {
    transform: [
      {
        rotateX: backInterpolate,
      },
    ],
  };

  const flipCard = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  return {
    backAnimatedStyle,
    frontAnimatedStyle,
    flipCard,
  };
}
