import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

interface InputAreaSectionProps {
  areaValue: string;
  setAreaValue: (area: string) => void;
}

const InputAreaSection: React.FC<InputAreaSectionProps> = ({ areaValue, setAreaValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {'Add your Area (m²)'}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Area in m²"
        value={areaValue.toString()}
        onChangeText={setAreaValue}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    fontWeight: '500'
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16
  }
});

export default InputAreaSection;
