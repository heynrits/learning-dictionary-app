import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import SummaryCard from '../components/SummaryCard';
import RecentItem from '../components/RecentItem';

export const Home = ({route, navigation}) => {
  const newEntry = route.params?.entry;
  useEffect(() => {
    if (newEntry) {
      const {type, text, translation} = newEntry;
      alert(`type: ${type}; text: ${text}; translation: ${translation}`);
    }
  }, [newEntry]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{height: '100%'}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <Text style={{marginBottom: 8, fontWeight: 'bold'}}>SUMMARY</Text>
            <SummaryCard
              goToDetails={() =>
                navigation.navigate('SummaryDetails', {message: 'success'})
              }
            />
          </View>

          <View style={{marginTop: 16}}>
            <Text style={{marginBottom: 8, fontWeight: 'bold'}}>
              RECENT ENTRIES
            </Text>

            <View>
              <RecentItem type="word" text="suda" translation="ulam" />
              <RecentItem
                type="sentence"
                text="Ania ti nagan mo? Ania ti nagan mo? Ania ti nagan mo? Ania ti nagan mo?"
                translation="Anong pangalan mo?"
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.fab}
          onPress={() =>
            navigation.navigate('NewEntry', {message: 'from FAB click'})
          }>
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 16,
    // backgroundColor: Colors.lighter,
  },
  summaryCard: {
    padding: 4,
    backgroundColor: '#fff',
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
    textAlign: 'right',
    // backgroundColor: 'red',
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
    // backgroundColor: 'red',
    textAlign: 'center',
    alignItems: 'center',
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#6200ea',
    position: 'absolute',
    bottom: 16,
    right: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabText: {
    color: '#fff',
    fontSize: 24,
  },
});
