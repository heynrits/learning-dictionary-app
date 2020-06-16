import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const RecentItem = ({type, text, translation}) => {
  return (
    <>
      <View style={styles.item}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}} />
        <Text style={styles.itemType}>{type}</Text>
        <Text style={{fontWeight: 'bold'}}>{text}</Text>
        <Text style={{color: '#313131', fontStyle: 'italic', marginTop: 4}}>
          : {translation}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 8,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  itemType: {
    alignSelf: 'baseline', // wraps content
    backgroundColor: '#ede7f6',
    color: '#111',
    padding: 4,
    textTransform: 'uppercase',
    fontSize: 10,
    borderRadius: 20,
  },
});

export default RecentItem;
