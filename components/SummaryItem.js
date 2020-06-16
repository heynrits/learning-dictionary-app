/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SummaryItem: () => React$Node = ({label, count}) => {
  return (
    <>
      <View style={styles.summaryItem}>
        <Text style={styles.itemCount}>{count}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  itemCount: {
    fontSize: 24,
    color: '#fff',
  },
  label: {
    color: '#fff',
  },
  summaryItem: {
    padding: 8,
    width: '33%',
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default SummaryItem;
