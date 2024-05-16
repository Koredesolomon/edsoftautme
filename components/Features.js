import { useFonts } from "expo-font"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import colors from "./constants/colors"
import Button from "./Button"

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 13,
        padding: 10,
        marginTop: 20,
    },
    headerText: {
        fontFamily: 'Mulish-SemiBold',
        fontSize: 20,
        color: colors.gray,
    },
    card : {
        backgroundColor: colors.lightgray,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        borderRadius: 20,
        flex: 1,
        width: 150,
        height: 190,
    },
    cardText : {
        fontFamily: 'Mulish-SemiBold',
        fontSize: 16,
        color: colors.black,
        textAlign:'center'
    },
    nav : {
        // flexDirection: 'column',
        gap: 3,    
        alignItems: 'center',
    },
    navText : {
        fontFamily: 'Mulish-Bold',
        fontSize: 18,
    },
    ssceCard : {
        backgroundColor: colors.lightgray,
        borderRadius: 20,
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 50,
        marginTop: 100,
        paddingRight: 50,
        paddingLeft: 50,
    },
    cardInner: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    ssceHeadText: {
        fontFamily: 'Mulish-SemiBold',
        fontSize: 20,
        color: colors.darkgray,
    },
    ssceSmallText: {
        fontFamily: 'Mulish-Regular',
        fontSize: 17,
        color: colors.gray,
        textAlign: 'center',
        marginBottom: 50,
        marginTop: 6,
    }
})

export const Feature = ({ text, leftIcon }) => {

    const [fontsLoaded, fontError] = useFonts({
        'Mulish-Regular': require('../assets/fonts/Mulish-Regular.ttf'),
        'Mulish-Bold': require('../assets/fonts/Mulish-Bold.ttf'),
        'Mulish-SemiBold': require('../assets/fonts/Mulish-SemiBold.ttf'),
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }

    return (
        <TouchableOpacity style={styles.header}>
            {leftIcon}
            <Text style={styles.headerText}>{text}</Text>
        </TouchableOpacity>
    )
}

export const Card = ({ image, text }) => {
    return ( 
        <View style={styles.card}>
            {image}
            <Text style={styles.cardText}>{text}</Text>
        </View>
    )
}

export const BottomNav = ({ image, text }) => {
    return (
      <TouchableOpacity style={styles.nav}>
        {image}      
        <Text style={styles.navText}>{text}</Text>  
      </TouchableOpacity>
    )
}

export const SsceCard = ({ image }) => {
    return ( 
        <View style={styles.ssceCard}>
            <View style={styles.cardInner}>
                {image}
                <Text style={styles.ssceHeadText}>More from EdSofta</Text>
            </View>
            <Text style={styles.ssceSmallText}>Get practicing with our prep app for your WAEC/SSCE exam.</Text>
            <Button text={'Download app'}/>
        </View>
    )
}