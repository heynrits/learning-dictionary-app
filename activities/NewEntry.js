import React, {useState, useRef, useLayoutEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {ScrollView} from 'react-native-gesture-handler';

export const NewEntry = ({navigation, route}) => {
  const {message} = route.params;

  const [selectedType, setSelectedType] = useState('word');
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  const [temp, setTemp] = useState(0);

  let inputText = useRef();
  let inputTranslation = useRef();

  useLayoutEffect(() => {
    const btnDisabled =
      selectedType === '' || text === '' || translation === '';
    navigation.setOptions(
      {
        headerRight: () => (
          <TouchableOpacity
            activeOpacity={0.85}
            disabled={btnDisabled}
            style={{marginRight: 16, opacity: btnDisabled ? 0.5 : 1}}
            onPress={() => {
              if (selectedType && text && translation) {
                navigation.navigate('Home', {
                  entry: {
                    type: selectedType,
                    text,
                    translation,
                  },
                });
              } else {
              }
            }}>
            <Text style={{fontWeight: 'bold', color: '#2e7d32'}}>SAVE</Text>
          </TouchableOpacity>
        ),
      },
      [navigation],
    );
  });

  const focusedInput = element => {
    element.setNativeProps({
      style: {
        borderColor: '#2e7d32',
      },
    });
  };

  const blurredInput = element => {
    element.setNativeProps({
      style: {
        borderColor: '#aaa',
      },
    });
  };

  return (
    <>
      <ScrollView style={styles.newEntryActivity}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>TYPE</Text>
          <View
            style={{
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#aaa',
              width: '50%',
            }}>
            <Picker
              mode="dropdown"
              selectedValue={selectedType}
              onValueChange={(value, index) => setSelectedType(value)}>
              <Picker.Item label="Word" value="word" />
              <Picker.Item label="Phrase" value="phrase" />
              <Picker.Item label="Sentence" value="sentence" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>TEXT</Text>
          <TextInput
            style={styles.textField}
            placeholder="Text"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            returnKeyType={'next'}
            onSubmitEditing={() => inputTranslation.focus()}
            blurOnSubmit={false}
            ref={input => {
              inputText = input;
            }}
            onFocus={() => focusedInput(inputText)}
            onBlur={() => blurredInput(inputText)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>PRONUNCIATION</Text>
          <Text style={{marginBottom: 8, color: '#666'}}>
            Press the button below to record pronunciation.
          </Text>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.recordBtn}
            onPress={() => alert('Bazzinga!')}>
            <Text style={{color: '#fff'}}>Record</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>TRANSLATION</Text>
          <TextInput
            style={styles.textField}
            ref={input => {
              inputTranslation = input;
            }}
            placeholder="Translation"
            onChangeText={newText => setTranslation(newText)}
            defaultValue={translation}
            onFocus={() => focusedInput(inputTranslation)}
            onBlur={() => blurredInput(inputTranslation)}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  newEntryActivity: {
    margin: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 8,
  },
  textField: {
    // backgroundColor: 'red',
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#aaa',
  },
  recordBtn: {
    backgroundColor: '#6200ea',
    color: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'baseline',
    borderRadius: 50,
  },
});
