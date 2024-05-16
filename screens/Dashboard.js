import React, { useCallback } from "react"
import { Entypo } from "@expo/vector-icons"
import Iconify from "@expo/vector-icons/Ionicons"
import {  Dimensions, Image, SafeAreaView, ScrollView, StyleSheet,Text, View } from "react-native"
import colors from "../components/constants/colors"
import { useFonts } from "expo-font"
import Button from "../components/Button"
import { BottomNav, Card, Feature, SsceCard } from "../components/Features"
import FontAwesome from '@expo/vector-icons/FontAwesome'


// SplashScreen.preventAutoHideAsync();



const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    body : {
        padding: 20,
        width: 411,
    },
    main : {
        flexDirection: "column",
        marginTop: 100,
    },
    container: {
        backgroundColor: colors.neutral,
        height: 120,
        width: 370,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'space-around',
        gap: 10,
    },
    greetings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bellnum: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Mulish-SemiBold',
        fontSize: 18,
        fontWeight: 'light'
    },
    textBolu : {
        fontFamily: 'Mulish-Bold',
        fontSize: 28,
    },
    Frame85: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        paddingRight: 10,
        marginTop: 40,
        // flex: 1,
        gap: 10,
    },
    hellotext : {
        fontFamily: 'Mulish-Bold',
        fontSize: 16,
        color: colors.black,
    },
    v1: {
        flex: 0,
    },
    v2: {
        flex: 1,
        gap: 20,
    },
    v3: {
        flex: 0,
    },
    scroll: {
        width: 85,
    },
    offline: {
        flexDirection: 'row',
        gap: 20,
    },
    offlineCard: {
        gap: 15,
        paddingRight: 25,
        paddingLeft: 25,
    },
    Frame87: {
        flexDirection: "row",
        gap: 29.8,
        marginTop: 20,
        padding: 14,
        
    },
    bottomNav : {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 90,    
        marginTop: 150,
    },
    relative : {
        position: 'relative'
    },
    absolute : {
        position: 'absolute',
        top: 52,
        left: 110,
        zIndex: 2,
    }
})

export default Dashboard = () => {

    const [fontsLoaded, fontError] = useFonts({
        'Mulish-Regular': require('../assets/fonts/Mulish-Regular.ttf'),
        'Mulish-Bold': require('../assets/fonts/Mulish-Bold.ttf'),
        'Mulish-SemiBold': require('../assets/fonts/Mulish-SemiBold.ttf'),
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }

    return (
            <SafeAreaView style={styles.body}>
                <ScrollView>
                    <View style={styles.main}>
                        <View style={styles.container}>
                            <View style={styles.greetings}>
                                <Text style={styles.text}>Good Evening,</Text>
                                <View style={styles.bellnum}>
                                    <Entypo name="bell" size={20} color={colors.yellow}/>
                                    <Text style={styles.text}>23</Text>
                                </View>
                            </View>
                            <View style={styles.user}>
                                <Text style={styles.textBolu}>Boluwatife</Text>
                                <Image source={require('../assets/images/user-circle.png')}></Image>
                            </View>
                        </View>
                    </View>
                    <View style={styles.Frame85}>
                        <View style={styles.v1}>
                            <Image style={styles.scroll} source={require('../assets/images/scroll.png')}/>
                        </View>
                        <View style={styles.v2}>
                            <Text style={styles.hellotext}>
                                Hello there, we have a study plan
                                drafted just for you.
                            </Text>
                            <Button text={'Get Started'}/>
                        </View>
                        <View style={styles.v3}>
                            <Entypo name="cross" size={25}/>
                        </View>
                    </View>
                    <Feature text={'Offline features'}
                    leftIcon={<Iconify name="radio"  size={20}/>}
                    />
                    <View style={styles.offlineCard}>
                        <View style={styles.offline}>
                            <Card 
                                image={<Image style={{ width: 120, height: 120 }} resizeMode="cover" source={require('../assets/images/practice.png')} />}
                                text={"Practice Exam"}
                            />
                            <Card 
                                image={<Image style={{ width: 120, height: 120 }} resizeMode="cover" source={require('../assets/images/study materials.png')} />}
                                text={"Read/Listen to Study Materials"}
                            />
                        </View>
                        <View style={styles.offline}>
                            <Card 
                                image={<Image style={{ width: 120, height: 120 }} resizeMode="cover" source={require('../assets/images/puzzle.png')} />}
                                text={"Play Games"}
                            />
                            <Card 
                                image={<Image style={{ width: 120, height: 120 }} resizeMode="cover" source={require('../assets/images/bookmark.png')} />}
                                text={"Saved Questions"}
                            />
                        </View>
                    </View>
                    <View style={styles.relative}>
                        <Image style={styles.absolute}
                        source={require('../assets/images/ssce-icon.png')}
                        />
                        <SsceCard 
                        image={<Image source={require('../assets/images/sparkles.png')}/>}
                        />
                    </View>
                    <Feature text={'Online features'}
                    leftIcon={<Iconify name="radio"  size={20}/>}
                    />
                    <View style={styles.offlineCard}>
                        <View style={styles.offline}>
                            <Card 
                                image={<Image style={{ width: 120, height: 120 }} resizeMode="cover" source={require('../assets/images/search.png')} />}
                                text={"Search for Tutor"}
                            />
                            <Card 
                                image={<Image style={{ width: 120, height: 120 }} resizeMode="cover" source={require('../assets/images/bubble.png')} />}
                                text={"Join Forum"}
                            />
                        </View>
                        <View style={styles.offline}>
                            <Card 
                                image={<Image style={{ width: 120, height: 120 }} resizeMode="cover" source={require('../assets/images/idea.png')} />}
                                text={"See Learning Recommendations"}
                            />
                        </View>
                    </View>
                    <Feature 
                    text={"Last test report"}
                    leftIcon={<Image source={require('../assets/images/presentation-chart-line.png')}/>
                    }
                    />
                    <View style={styles.Frame87}>
                        <View style={styles.v1}>
                            <Image style={styles.scroll} source={require('../assets/images/file.png')}/>
                        </View>
                        <View style={styles.v2}>
                            <Text style={styles.hellotext}>
                                You scored a total of 30/100 in Physics, Chemistry, & Mathematics
                            </Text>
                            <Button text={'View result history'}/>
                        </View>
                    </View>
                    <View style={styles.bottomNav}>
                        <BottomNav 
                        image={<Image source={require('../assets/images/home.png')} style={{ width: 35, height: 30 }}/>}
                        text={'Home'}
                        />
                        <BottomNav 
                        image={<FontAwesome name="newspaper-o"  size={30}/>}
                        text={'News'}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
    )
}