/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import SummaryItem from './SummaryItem';

const SummaryCard: () => React$Node = ({goToDetails}) => {
  return (
    <>
      <View style={styles.summaryCard}>
        <View style={styles.summaryDetails}>
          <SummaryItem count={120} label="words" />
          <SummaryItem count={48} label="phrases" />
          <SummaryItem count={29} label="sentences" />
        </View>
        <TouchableOpacity style={styles.detailsBtn} onPress={goToDetails}>
          <Text style={typography.textWhite}>DETAILS &#8594;</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const typography = StyleSheet.create({
  textWhite: {
    color: '#fff',
  },
});

const styles = StyleSheet.create({
  summaryCard: {
    padding: 4,
    backgroundColor: '#2e7d32',
    color: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  summaryDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8,
    borderTopColor: '#aaa',
    borderTopWidth: 1,
  },
  largeText: {
    fontSize: 24,
  },
  dataHolder: {
    padding: 8,
    width: '33%',
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default SummaryCard;
