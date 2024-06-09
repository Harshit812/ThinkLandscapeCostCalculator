import React from 'react';
import { View, StyleSheet } from 'react-native';
import InputAreaSection from '../../components/InputAreaSection';

interface AreaInputScreenProps {
  areaValue: string;
  setAreaValue: (value: string) => void;
}

const AreaInputScreen: React.FC<AreaInputScreenProps> = ({ areaValue, setAreaValue }) => {
  return (
    <View style={styles.container}>
      <InputAreaSection areaValue={areaValue} setAreaValue={setAreaValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

export default AreaInputScreen;
