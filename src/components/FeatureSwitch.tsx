import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { featureGifs } from '../config/featureGifs';

interface FeatureSwitchProps {
  featureName: string;
  featureValue: boolean;
  onFeatureToggle: () => void;
}

const FeatureSwitch: React.FC<FeatureSwitchProps> = ({ featureName, featureValue, onFeatureToggle }) => {
  const gifSource = featureGifs[featureName];
  const [isToggled, setIsToggled] = useState(featureValue);

  const handleToggle = () => {
    onFeatureToggle();
    setIsToggled(!isToggled);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleToggle}>
      <View style={[styles.card, { borderColor: isToggled ? '#fe7013' : '#ccc' }]}>
        <FastImage source={gifSource} style={styles.gif} resizeMode={FastImage.resizeMode.contain} />
        <View style={styles.info}>
          <Text style={styles.featureName}>{featureName.toLocaleUpperCase()}</Text>
          <Switch value={isToggled} onValueChange={handleToggle} thumbColor='white' trackColor={{true: '#fe7013'}}/>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
    borderWidth: 2,
  },
  gif: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  featureName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
});

export default FeatureSwitch;
