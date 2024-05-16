//create all your buttons here

import React from "react"
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native"
import colors from "../components/constants/colors"
import { useFonts } from "expo-font"


const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.blue,
      alignItems: 'center',
      width: 225,
      paddingTop: 14,
      paddingBottom: 14,
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 16,
      color: colors.white,
      fontFamily: 'Mulish-SemiBold',
    },
  })


export default Button = ({text}) => {

  const [fontsLoaded, fontError] = useFonts({
    'Mulish-SemiBold': require('../assets/fonts/Mulish-SemiBold.ttf'),

  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

    return (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      )
}