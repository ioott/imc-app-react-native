import React from "react";
import {View, Text, TouchableOpacity, Share} from "react-native";
import styles from "./style";

export default function ResultImc(props){
  const onShare = async () => {
    await Share.share({
      message: "Meu IMC hoje é: " +  props.resultImc,
    })
  }

  return(
    <View style={styles.contextImc}>
      <Text style={styles.titleResultImc}>{props.messageResultImc}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
      <View style={styles.boxShareButton}>
        { props.resultImc != null ?
          <TouchableOpacity
            onPress={onShare}
            style={styles.shared}
          >
            <Text style={styles.sharedText}>Compartilhar</Text>
          </TouchableOpacity>
          : <View/>
        }
      </View>
    </View>
  );
}