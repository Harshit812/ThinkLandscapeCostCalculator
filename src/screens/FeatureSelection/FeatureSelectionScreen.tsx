import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import FeatureSwitch from '../../components/FeatureSwitch';
import { UserSelectedFeatures } from '../../types';

interface FeatureSelectionScreenProps {
  selectedFeatures: UserSelectedFeatures;
  toggleFeature: (feature: keyof UserSelectedFeatures) => void;
}

const FeatureSelectionScreen: React.FC<FeatureSelectionScreenProps> = ({ selectedFeatures, toggleFeature }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Features</Text>
      <ScrollView>
      {Object.keys(selectedFeatures).map((feature) => (
        <FeatureSwitch
          key={feature}
          featureName={feature}
          featureValue={selectedFeatures[feature as keyof UserSelectedFeatures]}
          onFeatureToggle={() => toggleFeature(feature as keyof UserSelectedFeatures)}
        />
      ))}
    </ScrollView >
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 32
  },
});

export default FeatureSelectionScreen;
