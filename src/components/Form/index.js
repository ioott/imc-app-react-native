import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Keyboard,
  Pressable
} from 'react-native';
import ResultImc from './ResultImc';
import styles from './style';

export default function Form(){
  const [ height, setHeight ] = useState(null);
  const [ weight, setWeight ] = useState(null);
  const [ messageImc, setMessageImc ] = useState("Preencha peso e altura");
  const [ imc, setImc ] = useState(null);
  const [ textButton, setTextButton ] = useState("Calcular");
  const [ errorMessage, setErrorMessage ] = useState(null);

  function verifyImc (){
    if(imc == null ){
      Vibration.vibrate();
      setErrorMessage("*Campo obrigatório");
    }
  };

  function imcCalculator(){
    let heightFormat = height.replace(",",".")
    return setImc(
      (weight/(heightFormat*heightFormat)).toFixed(2)
    )
  };

  function validateImc(){
    if(weight != null && height != null){
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é");
      setTextButton("Calcular novamente");
      setErrorMessage(null);
      return
    };

    verifyImc();
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha peso e altura");
  };

  return(
    <Pressable
      onPress={Keyboard.dismiss}
      style={styles.formContext}>
      <View style={styles.form}>

        <Text style={styles.formLabel}>Altura (m)</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.70"
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>Peso (kg)</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 70"
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => {
            Keyboard.dismiss()
            validateImc()}
          }
        >
          <Text
          style={styles.textButtonCalculator}>
            {textButton}
          </Text>
        </TouchableOpacity>

      </View>

      <ResultImc
        messageResultImc={messageImc}
        resultImc={imc}
      />

    </Pressable>
  )
}