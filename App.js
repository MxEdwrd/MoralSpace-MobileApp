// Author: Max Edward
// Course: SPT323 - React Native
// Date Created: 3/18/22
// Date Modified: 3/19/22

// These are importing libraries for use with the below code.
import 'react-native-gesture-handler'; // This imports the gesture handler to handle gestures.
import React, { useState } from 'react'; // This import allows us to use "react".
import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from 'react-native'; // This import allows us to use "react-native". This is specifically importing the text, view, image, image background, stylesheet, scrollview, pressable, text input, and keyboard avoiding view libraries.
import AppLoading from 'expo-app-loading'; // This import allows us to have the application loading library. This is used for if the fonts do not load properly.
import Constants from 'expo-constants'; // This allows us to use constants within the program code.
import { StatusBar } from 'expo-status-bar'; // This imports the status bar library in order to be able to chance aspects of the status bar.
import { useFonts } from 'expo-font'; // This imports the 'usefonts' library to be able to use different kinds of fonts.
import { NavigationContainer } from '@react-navigation/native'; // This imports the nativation container from React.
import { createStackNavigator } from '@react-navigation/stack'; // This imports the creation of the stack navigator from React.
import { Audio } from 'expo-av';

// Variables
var currScore = 0;
// This is the variable used for the registered email output into the alert.
var registerEmail = '';

function AddScore() {
  // Function for when choice is a '1'.
  currScore = currScore + 1;
}

function ScoreReset() {
  // Function for when score needs to be reset - beginning of game.
  currScore = 0;
}

function PlayBackgroundSound() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/sounds/AmbientSpace.mp3'));
      await sound.setIsLoopingAsync(true);
      await sound.setVolumeAsync(0.1);
      await sound.playAsync(true);
    } catch (error) {
      console.error(error);
    }
  })();
}

// This function is for the alert shown after registering your email for the newsletter.
const emailRegistered = () => {
  //function to make two option alert
  Alert.alert(
    'Email Registered',
    'Thank you for signing up! A confirmation email has been sent to ' +
      registerEmail +
      '. Please click on the link in that email to confirm your registration. Please check your spam and junk inboxes as it may have been sent there.',
    [{ text: 'OK' }],
    { cancelable: false }
    //clicking out side of alert will not cancel
  );
};

// This exports the entire application as one App.
export default App;

// Screen 1 - Home Screen
function HomePage({ navigation }) {
  PlayBackgroundSound();
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView
        style={[styles.flex, styles.statusBar, styles.backgroundColor]}>
        <StatusBar style="light" />
        <ImageBackground
          source={require('./assets/images/BlueSwirlPlanet.jpg')}
          resizeMode="cover"
          style={styles.imageHome}>
          <View style={styles.centerItems}>
            <Image
              style={[styles.imageHeader]}
              source={require('./assets/images/NebulaZoom.gif')}
            />
          </View>
          <View style={styles.centerItems}>
            <Image
              style={styles.logo}
              source={require('./assets/images/UATspaceLogo.jpg')}
            />
          </View>
          <View>
            <Text
              style={[
                styles.header,
                styles.textColor,
                styles.centerText,
                styles.titleFont,
                styles.textShadow,
              ]}>
              MoralSpace
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.headerBody,
                styles.textColor,
                styles.centerText,
                styles.bodyFont,
                { fontSize: 25 },
              ]}>
              Exploring the Morality of Space
            </Text>
          </View>
          <View style={styles.squareShape} />
          <View style={styles.circleShape} />
          <View>
            <Text
              style={[
                styles.body,
                styles.textColor,
                styles.centerText,
                styles.bodyFont,
                { fontSize: 20 },
              ]}>
              Click an image below to view its contents.
            </Text>
          </View>
          <View>
            <View style={[styles.centerItems]}>
              <Text
                style={[
                  styles.body,
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.bodySpace,
                  { fontSize: 30, marginTop: -10 },
                ]}>
                The Ethics of Space
              </Text>
              <Text
                style={[
                  styles.body,
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                ]}>
                Have you ever wondered about the ethics behind exploring space?
                Read about the morality of space exploration below.
              </Text>
              <Pressable
                onPress={() => {
                  navigation.navigate('EthicsOfSpace');
                  //PlayEnergySword();
                }}>
                <Image
                  style={[styles.image, { borderColor: 'white' }]}
                  source={require('./assets/images/Astronaut.jpg')}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.centerItems}>
            <View style={styles.lineSquare} />
            <View style={styles.lineCircle} />
          </View>
          <View>
            <View style={[styles.centerItems]}>
              <Text
                style={[
                  styles.body,
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.bodySpace,
                  { fontSize: 30 },
                ]}>
                Space Ethicist - The Game
              </Text>
              <Text
                style={[
                  styles.body,
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                ]}>
                Make choices based upon your own moral compass in the game
                "Space Ethicist" below!
              </Text>
              <Pressable
                onPress={() => {
                  navigation.navigate('SpaceEthicist');
                  //PlayEnergySword();
                }}>
                <Image
                  style={[styles.image, { borderColor: 'white' }]}
                  source={require('./assets/images/SpaceEthicist.png')}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.centerItems}>
            <View style={styles.lineSquare} />
            <View style={styles.lineCircle} />
          </View>
          <View>
            <View>
              <Text
                style={[
                  styles.body,
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  { fontSize: 22.5, paddingBottom: 20 },
                ]}>
                If you would like to sign up for our newsletter, please enter
                your email below.
              </Text>
              <View style={styles.centerItems}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter Email Here"
                  placeholderTextColor="black"
                  keyboardType="email-address"
                  keyboardAppearance="dark"
                  onChangeText={(text) => (registerEmail = text)}
                />
              </View>
              <View style={styles.centerItems}>
                <View>
                  <Pressable onPress={() => emailRegistered()}>
                    <Image
                      style={styles.registerButton}
                      source={require('./assets/images/PurpleGalaxy.gif')}
                    />
                    <Text
                      style={[
                        styles.textColor,
                        styles.centerText,
                        styles.titleFont,
                        styles.textShadow,
                        styles.registerText,
                        { marginTop: -75 },
                      ]}>
                      Register Now!
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={[
                styles.copyright,
                styles.fontStyle,
                styles.textColor,
                styles.centerText,
                styles.bodyFont,
              ]}>
              UAT | M3D Designs | © 2022
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Screen 2 - The Ethics of Space
function EthicsPage({ navigation }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView
        style={[styles.flex, styles.statusBar, styles.backgroundColor]}>
        <StatusBar style="light" />
        <ImageBackground
          source={require('./assets/images/SwirlPlanet.jpg')}
          resizeMode="cover"
          style={styles.imageHome}>
          <View style={styles.centerItems}>
            <Image
              style={[styles.imageHeader, { height: 200 }]}
              source={require('./assets/images/NebulaZoom.gif')}
            />
          </View>
          <View>
            <Text
              style={[
                styles.header,
                styles.textColor,
                styles.centerText,
                styles.titleFont,
                styles.textShadow,
                { fontSize: 40 },
              ]}>
              The Ethics of Space
            </Text>
          </View>
          <View style={styles.squareShape} />
          <View style={styles.circleShape} />
          <View>
            <View style={[styles.centerItems]}>
              <Text
                style={[
                  styles.body,
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.bodySpace,
                  { fontSize: 30 },
                ]}>
                What are the Ethics of Space?
              </Text>
              <Text
                style={[
                  styles.body,
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                ]}>
                Space Ethics is concerned with examining the idea that just
                because we CAN do certain things in space, it doesn't mean we
                should. From space exploration to environmental ethics, it
                examines the ethical questions space research might raise and it
                attempts to find potential solutions to those problems.
              </Text>
            </View>
            <View style={styles.centerItems}>
              <View style={styles.lineSquare} />
              <View style={styles.lineCircle} />
            </View>
            <View>
              <View style={styles.centerItems}>
                <Image
                  style={[
                    styles.image,
                    { borderColor: 'white', marginTop: 30 },
                  ]}
                  source={require('./assets/images/SpaceRocket.jpg')}
                />
              </View>
              <Text
                style={[
                  styles.body,
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.bodySpace,
                  { fontSize: 30 },
                ]}>
                Why you should care about the Ethics of Space
              </Text>
              <Text
                style={[
                  styles.body,
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                ]}>
                Space Ethics help guide us along a path to deal more effectively
                with ethical dilemmas that may come from space exploration. By
                eliminating those behaviors that do not conform to our sense of
                right and wrong, we are able to have rational debates and
                communicate how we feel about the topic of space. You may think
                space exploration is necessary in the future of our species,
                however, someone else may think the total opposite.
              </Text>
            </View>
            <View style={styles.centerItems}>
              <View style={styles.lineSquare} />
              <View style={styles.lineCircle} />
            </View>
            <View>
              <View style={styles.centerItems}>
                <Image
                  style={[
                    styles.image,
                    { borderColor: 'white', marginTop: 30 },
                  ]}
                  source={require('./assets/images/AstronautMoon.jpg')}
                />
              </View>
              <Text
                style={[
                  styles.body,
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.bodySpace,
                  { fontSize: 30 },
                ]}>
                How you can contribute to Space Ethics
              </Text>
              <Text
                style={[
                  styles.body,
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                ]}>
                Being interested in Space Ethics is the first step! From here,
                participating in polls, debates, and government meetings
                regarding space exploration helps get your voice out there. You
                can also spread your opinion online and explore the potential
                issues that your views may have. By doing so, you can better
                support your opinions with facts and see the opposition's views.
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.centerItems}>
              <View>
                <Pressable
                  onPress={() => navigation.navigate('MoralSpaceHome')}>
                  <Image
                    style={styles.registerButton}
                    source={require('./assets/images/PurpleGalaxy.gif')}
                  />
                  <Text
                    style={[
                      styles.textColor,
                      styles.centerText,
                      styles.titleFont,
                      styles.textShadow,
                      styles.registerText,
                      { marginTop: -75 },
                    ]}>
                    Go Home
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={[
                styles.copyright,
                styles.fontStyle,
                styles.textColor,
                styles.centerText,
                styles.bodyFont,
              ]}>
              UAT | M3D Designs | © 2022
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Screen 3 - Space Ethicist - The Game
function GamePage({ navigation }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={[styles.flex, styles.statusBar, styles.backgroundColor]}>
        <StatusBar style="light" />
        <ImageBackground
          source={require('./assets/images/SpaceVortexLight.gif')}
          resizeMode="cover"
          style={styles.imageHome}>
          <View>
            <Text
              style={[
                styles.textColor,
                styles.centerText,
                styles.textShadow,
                {
                  fontSize: 60,
                  fontWeight: 'bold',
                  marginTop: 225,
                  paddingLeft: 70,
                  paddingRight: 70,
                },
              ]}>
              SPACE ETHICIST
            </Text>
            <Text
              style={[
                styles.body,
                styles.textColor,
                styles.centerText,
                styles.bodyFont,
                styles.textShadow,
                { fontSize: 22.5 },
              ]}>
              The Space Moral Compass Game
            </Text>
          </View>
          <View style={[styles.centerItems, { marginTop: 50 }]} />
          <View style={{ height: 50 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={(styles.centerItems, styles.button)}>
              <Pressable onPress={() => navigation.navigate('MoralSpaceHome')}>
                <Text
                  style={[
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.textShadow,
                    styles.buttonText,
                  ]}>
                  Quit
                </Text>
              </Pressable>
            </View>
            <View style={(styles.centerItems, styles.button)}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Question1');
                  ScoreReset();
                }}>
                <Text
                  style={[
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.textShadow,
                    styles.buttonText,
                  ]}>
                  Play
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={{ height: 125 }} />
          <View>
            <Text
              style={[
                styles.copyright,
                styles.fontStyle,
                styles.textColor,
                styles.centerText,
                styles.bodyFont,
              ]}>
              UAT | M3D Designs | © 2022
            </Text>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

// Screen 4 - Question 1 - Extraterrestrial Life
function Q1Page({ navigation }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={[styles.flex, styles.statusBar, styles.backgroundColor]}>
        <StatusBar style="light" />
        <ImageBackground
          source={require('./assets/images/Question1.png')}
          resizeMode="cover"
          style={styles.imageHome}>
          <View>
            <Text
              style={[
                styles.textColor,
                styles.centerText,
                styles.textShadow,
                { fontSize: 30, fontWeight: 'bold', marginTop: 150 },
              ]}>
              Question One
            </Text>
            <Text
              style={[
                styles.body,
                styles.textColor,
                styles.centerText,
                styles.bodyFont,
                styles.textShadow,
                { fontSize: 20 },
              ]}>
              If we discover intelligent extraterrestrial life, should we fight
              the beings?
            </Text>
          </View>
          <View style={[styles.centerItems, { marginTop: 25 }]} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View
              style={[
                styles.centerItems,
                { width: 150, marginHorizontal: 15 },
              ]}>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20, fontWeight: 'bold' },
                ]}>
                Yes
              </Text>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20 },
                ]}>
                We should fight the beings. They may attack us first. It's
                better to get the upper hand.
              </Text>
            </View>
            <View
              style={[
                styles.centerItems,
                { width: 150, marginHorizontal: 15 },
              ]}>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20, fontWeight: 'bold' },
                ]}>
                No
              </Text>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20 },
                ]}>
                We should befriend the beings. They haven't done anything to us
                so why should we do anything to them.
              </Text>
            </View>
          </View>
          <View style={[styles.centerItems, { marginTop: 200 }]} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={(styles.centerItems, styles.questionButton)}>
              <Pressable onPress={() => navigation.navigate('Question2')}>
                <Text
                  style={[
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.buttonText,
                    { color: 'black' },
                  ]}>
                  Yes
                </Text>
              </Pressable>
            </View>
            <View style={(styles.centerItems, styles.questionButton)}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Question2');
                  AddScore();
                }}>
                <Text
                  style={[
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.buttonText,
                    { color: 'black' },
                  ]}>
                  No
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

// Screen 5 - Question 2 - Colonize Mars
function Q2Page({ navigation }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={[styles.flex, styles.statusBar, styles.backgroundColor]}>
        <StatusBar style="light" />
        <ImageBackground
          source={require('./assets/images/Question2.png')}
          resizeMode="cover"
          style={styles.imageHome}>
          <View>
            <Text
              style={[
                styles.textColor,
                styles.centerText,
                styles.textShadow,
                { fontSize: 30, fontWeight: 'bold', marginTop: 150 },
              ]}>
              Question Two
            </Text>
            <Text
              style={[
                styles.body,
                styles.textColor,
                styles.centerText,
                styles.bodyFont,
                styles.textShadow,
                { fontSize: 20 },
              ]}>
              If we begin to colonize Mars, would it be morally right to do so?
            </Text>
          </View>
          <View style={[styles.centerItems, { marginTop: 25 }]} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View
              style={[
                styles.centerItems,
                { width: 150, marginHorizontal: 15 },
              ]}>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20, fontWeight: 'bold' },
                ]}>
                Yes
              </Text>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20 },
                ]}>
                It is in our nature to explore unknown land. It would be another
                exploration event such as Christopher Columbus's.
              </Text>
            </View>
            <View
              style={[
                styles.centerItems,
                { width: 150, marginHorizontal: 15 },
              ]}>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20, fontWeight: 'bold' },
                ]}>
                No
              </Text>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20 },
                ]}>
                We should stay on Earth where we have already colonized the
                land. Colonizing Mars would destroy the landscape.
              </Text>
            </View>
          </View>
          <View style={[styles.centerItems, { marginTop: 175 }]} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={(styles.centerItems, styles.questionButton)}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Question3');
                  AddScore();
                }}>
                <Text
                  style={[
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.buttonText,
                    { color: 'black' },
                  ]}>
                  Yes
                </Text>
              </Pressable>
            </View>
            <View style={(styles.centerItems, styles.questionButton)}>
              <Pressable onPress={() => navigation.navigate('Question3')}>
                <Text
                  style={[
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.buttonText,
                    { color: 'black' },
                  ]}>
                  No
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

// Screen 6 - Question 3 - Space Exploration Budget
function Q3Page({ navigation }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={[styles.flex, styles.statusBar, styles.backgroundColor]}>
        <StatusBar style="light" />
        <ImageBackground
          source={require('./assets/images/Question3.png')}
          resizeMode="cover"
          style={styles.imageHome}>
          <View>
            <Text
              style={[
                styles.textColor,
                styles.centerText,
                styles.textShadow,
                { fontSize: 30, fontWeight: 'bold', marginTop: 150 },
              ]}>
              Question Three
            </Text>
            <Text
              style={[
                styles.body,
                styles.textColor,
                styles.centerText,
                styles.bodyFont,
                styles.textShadow,
                { fontSize: 20 },
              ]}>
              Is the current budget allocated for space exploration ($23.3
              Billion) justifiable when there are injustices on Earth that need
              attention (no water, electricity or food)?
            </Text>
          </View>
          <View style={[styles.centerItems, { marginTop: 25 }]} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View
              style={[
                styles.centerItems,
                { width: 150, marginHorizontal: 15 },
              ]}>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20, fontWeight: 'bold' },
                ]}>
                Yes
              </Text>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20 },
                ]}>
                We need to keep exploring in order to find new planets and
                stars, which could help people here on Earth.
              </Text>
            </View>
            <View
              style={[
                styles.centerItems,
                { width: 150, marginHorizontal: 15 },
              ]}>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20, fontWeight: 'bold' },
                ]}>
                No
              </Text>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20 },
                ]}>
                We must focus on our own world first before venturing off onto
                others.
              </Text>
            </View>
          </View>
          <View style={[styles.centerItems, { marginTop: 150 }]} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={(styles.centerItems, styles.questionButton)}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Question4');
                  AddScore();
                }}>
                <Text
                  style={[
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.buttonText,
                    { color: 'black' },
                  ]}>
                  Yes
                </Text>
              </Pressable>
            </View>
            <View style={(styles.centerItems, styles.questionButton)}>
              <Pressable onPress={() => navigation.navigate('Question4')}>
                <Text
                  style={[
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.buttonText,
                    { color: 'black' },
                  ]}>
                  No
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

// Screen 7 - Question 4 - Space Ownership
function Q4Page({ navigation }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={[styles.flex, styles.statusBar, styles.backgroundColor]}>
        <StatusBar style="light" />
        <ImageBackground
          source={require('./assets/images/Question4.png')}
          resizeMode="cover"
          style={styles.imageHome}>
          <View>
            <Text
              style={[
                styles.textColor,
                styles.centerText,
                styles.textShadow,
                { fontSize: 30, fontWeight: 'bold', marginTop: 150 },
              ]}>
              Question Four
            </Text>
            <Text
              style={[
                styles.body,
                styles.textColor,
                styles.centerText,
                styles.bodyFont,
                styles.textShadow,
                { fontSize: 20 },
              ]}>
              Do you believe space should be owned by no one, or should
              companies and governments be able to own parts of space?
            </Text>
          </View>
          <View style={[styles.centerItems, { marginTop: 25 }]} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View
              style={[
                styles.centerItems,
                { width: 150, marginHorizontal: 15 },
              ]}>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20, fontWeight: 'bold' },
                ]}>
                Yes
              </Text>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20 },
                ]}>
                Space should be owned by governments or companies in order to
                establish control and law.
              </Text>
            </View>
            <View
              style={[
                styles.centerItems,
                { width: 150, marginHorizontal: 15 },
              ]}>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20, fontWeight: 'bold' },
                ]}>
                No
              </Text>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20 },
                ]}>
                Space shouldn't be owned by anyone. It should be owned by the
                entire human race and people should be able to go wherever they
                want.
              </Text>
            </View>
          </View>
          <View style={[styles.centerItems, { marginTop: 150 }]} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={(styles.centerItems, styles.questionButton)}>
              <Pressable onPress={() => navigation.navigate('Question5')}>
                <Text
                  style={[
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.buttonText,
                    { color: 'black' },
                  ]}>
                  Yes
                </Text>
              </Pressable>
            </View>
            <View style={(styles.centerItems, styles.questionButton)}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Question5');
                  AddScore();
                }}>
                <Text
                  style={[
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.buttonText,
                    { color: 'black' },
                  ]}>
                  No
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

// Screen 8 - Question 5 - Satellite Orbit
function Q5Page({ navigation }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={[styles.flex, styles.statusBar, styles.backgroundColor]}>
        <StatusBar style="light" />
        <ImageBackground
          source={require('./assets/images/Question5.png')}
          resizeMode="cover"
          style={styles.imageHome}>
          <View>
            <Text
              style={[
                styles.textColor,
                styles.centerText,
                styles.textShadow,
                { fontSize: 30, fontWeight: 'bold', marginTop: 150 },
              ]}>
              Question Five
            </Text>
            <Text
              style={[
                styles.body,
                styles.textColor,
                styles.centerText,
                styles.bodyFont,
                styles.textShadow,
                { fontSize: 20 },
              ]}>
              Is it morally right to continue sending satellites into our orbit
              when there are already so many?
            </Text>
          </View>
          <View style={[styles.centerItems, { marginTop: 25 }]} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View
              style={[
                styles.centerItems,
                { width: 150, marginHorizontal: 15 },
              ]}>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20, fontWeight: 'bold' },
                ]}>
                Yes
              </Text>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20 },
                ]}>
                It is necessary in order to continue innovation in space
                technology and upkeep current systems.
              </Text>
            </View>
            <View
              style={[
                styles.centerItems,
                { width: 150, marginHorizontal: 15 },
              ]}>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20, fontWeight: 'bold' },
                ]}>
                No
              </Text>
              <Text
                style={[
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  styles.textShadow,
                  styles.buttonText,
                  { fontSize: 20 },
                ]}>
                Each time a satellite breaks, it creates space pollution and
                increases the risks of falling back to Earth.
              </Text>
            </View>
          </View>
          <View style={[styles.centerItems, { marginTop: 175 }]} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={(styles.centerItems, styles.questionButton)}>
              <Pressable onPress={() => navigation.navigate('Endings')}>
                <Text
                  style={[
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.buttonText,
                    { color: 'black' },
                  ]}>
                  Yes
                </Text>
              </Pressable>
            </View>
            <View style={(styles.centerItems, styles.questionButton)}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Endings');
                  AddScore();
                }}>
                <Text
                  style={[
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.buttonText,
                    { color: 'black' },
                  ]}>
                  No
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

// Screen 9 - End Screens
function EndScreen({ navigation }) {
  if (currScore == 0) {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={[styles.flex, styles.statusBar, styles.backgroundColor]}>
          <StatusBar style="light" />
          <ImageBackground
            source={require('./assets/images/SpacePirate.jpg')}
            resizeMode="cover"
            style={styles.imageHome}>
            <View>
              <Text
                style={[
                  styles.header,
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  { fontSize: 30, fontWeight: 'bold', marginTop: 250 },
                ]}>
                You are...
              </Text>
              <View style={styles.centerItems}>
                <View style={styles.lineSquare} />
                <View style={styles.lineCircle} />
              </View>
              <View style={[styles.centerItems]}>
                <Text
                  style={[
                    styles.body,
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.textShadow,
                    styles.bodySpace,
                    { fontSize: 45 },
                  ]}>
                  A Space Pirate!
                </Text>
                <Text
                  style={[
                    styles.body,
                    styles.textColor,
                    styles.centerText,
                    styles.bodyFont,
                    styles.textShadow,
                  ]}>
                  You align morally with the characteristics of a Space Pirate.
                  You want to fight for territory, stay on your own land,
                  believe space should be owned, and don't care about the
                  environment. You are a pirate at heart!
                </Text>
              </View>
            </View>
            <View style={{ height: 15 }} />
            <View>
              <View style={styles.centerItems}>
                <View style={[styles.endingButton, { backgroundColor: 'red' }]}>
                  <Pressable
                    onPress={() => navigation.navigate('SpaceEthicist')}>
                    <Text
                      style={[
                        styles.textColor,
                        styles.centerText,
                        styles.titleFont,
                        styles.textShadow,
                        styles.registerText,
                      ]}>
                      Main Menu
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <View>
              <Text
                style={[
                  styles.copyright,
                  styles.fontStyle,
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  { marginTop: 75 },
                ]}>
                UAT | M3D Designs | © 2022
              </Text>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    );
  }
  if (currScore == 5) {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={[styles.flex, styles.statusBar, styles.backgroundColor]}>
          <StatusBar style="light" />
          <ImageBackground
            source={require('./assets/images/SpaceExplorer.jpg')}
            resizeMode="cover"
            style={styles.imageHome}>
            <View>
              <Text
                style={[
                  styles.header,
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  { fontSize: 30, fontWeight: 'bold', marginTop: 250 },
                ]}>
                You are...
              </Text>
              <View style={styles.centerItems}>
                <View style={styles.lineSquare} />
                <View style={styles.lineCircle} />
              </View>
              <View style={[styles.centerItems]}>
                <Text
                  style={[
                    styles.body,
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.textShadow,
                    styles.bodySpace,
                    { fontSize: 45 },
                  ]}>
                  A Space Explorer!
                </Text>
                <Text
                  style={[
                    styles.body,
                    styles.textColor,
                    styles.centerText,
                    styles.bodyFont,
                    styles.textShadow,
                  ]}>
                  You align morally with the characteristics of a Space
                  Explorer. You are friendly with other life, want to explore,
                  believe space is for everyone, and care about the environment.
                  You are the future of space exploration!
                </Text>
              </View>
            </View>
            <View style={{ height: 15 }} />
            <View>
              <View style={styles.centerItems}>
                <View
                  style={[styles.endingButton, { backgroundColor: 'blue' }]}>
                  <Pressable
                    onPress={() => navigation.navigate('SpaceEthicist')}>
                    <Text
                      style={[
                        styles.textColor,
                        styles.centerText,
                        styles.titleFont,
                        styles.textShadow,
                        styles.registerText,
                      ]}>
                      Main Menu
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <View>
              <Text
                style={[
                  styles.copyright,
                  styles.fontStyle,
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  { marginTop: 75 },
                ]}>
                UAT | M3D Designs | © 2022
              </Text>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={[styles.flex, styles.statusBar, styles.backgroundColor]}>
          <StatusBar style="light" />
          <ImageBackground
            source={require('./assets/images/EarthDweller.jpg')}
            resizeMode="cover"
            style={styles.imageHome}>
            <View>
              <Text
                style={[
                  styles.header,
                  styles.textColor,
                  styles.centerText,
                  styles.titleFont,
                  styles.textShadow,
                  { fontSize: 30, fontWeight: 'bold', marginTop: 175 },
                ]}>
                You are...
              </Text>
              <View style={styles.centerItems}>
                <View style={styles.lineSquare} />
                <View style={styles.lineCircle} />
              </View>
              <View style={[styles.centerItems]}>
                <Text
                  style={[
                    styles.body,
                    styles.textColor,
                    styles.centerText,
                    styles.titleFont,
                    styles.textShadow,
                    styles.bodySpace,
                    { fontSize: 45 },
                  ]}>
                  An Earth Dweller!
                </Text>
                <Text
                  style={[
                    styles.body,
                    styles.textColor,
                    styles.centerText,
                    styles.bodyFont,
                    styles.textShadow,
                  ]}>
                  You align morally with the characteristics of an Earth
                  Dweller. You're interested in space exploration, but have some
                  doubts. Maybe you want to hunt aliens, but also believe in the
                  environment. Maybe you believe space shouldn't be owned, but
                  think that the budget for space exploration is too high. One
                  thing is for certain, you like Earth the most!
                </Text>
              </View>
            </View>
            <View style={{ height: 15 }} />
            <View>
              <View style={styles.centerItems}>
                <View
                  style={[styles.endingButton, { backgroundColor: 'green' }]}>
                  <Pressable
                    onPress={() => navigation.navigate('SpaceEthicist')}>
                    <Text
                      style={[
                        styles.textColor,
                        styles.centerText,
                        styles.titleFont,
                        styles.textShadow,
                        styles.registerText,
                      ]}>
                      Main Menu
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <View>
              <Text
                style={[
                  styles.copyright,
                  styles.fontStyle,
                  styles.textColor,
                  styles.centerText,
                  styles.bodyFont,
                  { marginTop: 75 },
                ]}>
                UAT | M3D Designs | © 2022
              </Text>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

// This creats a constant string of Stack used for the creation of the stack navigator
const Stack = createStackNavigator();

// This is the main function for the application.
function App() {
  let [fontsLoaded] = useFonts({
    Kanit: require('./assets/fonts/Kanit-Regular.ttf'),
    Fredoka: require('./assets/fonts/FredokaOne-Regular.ttf'),
    Archivo: require('./assets/fonts/ArchivoBlack-Regular.ttf'),
  });

  // This states that if the fonts are not loaded, continue loading the application. In basic terms, keep the application from opening until the fonts have been loaded into the project.
  if (!fontsLoaded) {
    return <AppLoading />;
    // If the fonts have been loaded, proceed displaying the project.
  } else {
    // This is the main return function for the project, in this case text readout.
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="MoralSpaceHome" component={HomePage} />
          <Stack.Screen name="EthicsOfSpace" component={EthicsPage} />
          <Stack.Screen name="SpaceEthicist" component={GamePage} />
          <Stack.Screen name="Question1" component={Q1Page} />
          <Stack.Screen name="Question2" component={Q2Page} />
          <Stack.Screen name="Question3" component={Q3Page} />
          <Stack.Screen name="Question4" component={Q4Page} />
          <Stack.Screen name="Question5" component={Q5Page} />
          <Stack.Screen name="Endings" component={EndScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// Below is the CSS for the project.
const styles = StyleSheet.create({
  // Parametric Styles - used for quick changes to certain aspects of the page. This includes generalized CSS.
  flex: {
    flex: 1,
  },
  /*statusBar: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
  },*/
  centerItems: {
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  titleFont: {
    fontFamily: 'Fredoka',
    fontSize: 45,
  },
  bodyFont: {
    fontFamily: 'Kanit',
    fontSize: 20,
  },
  textShadow: {
    textShadowRadius: 5,
    textShadowColor: 'black',
    textShadowOffset: { width: 3, height: 3 },
  },
  textColor: {
    color: 'white',
  },
  backgroundColor: {
    backgroundColor: 'black',
  },
  squareShape: {
    width: '110%',
    height: 5,
    backgroundColor: 'white',
  },
  circleShape: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: -10,
  },
  lineSquare: {
    margin: 15,
    height: 5,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 5 / 2,
  },
  lineCircle: {
    width: 12.5,
    height: 12.5,
    borderRadius: 15 / 2,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: -24,
  },

  // Object Styles - this is all the other styling for the project. This includes more specific CSS.
  imageHome: {
    width: '100%',
    height: '100%',
  },
  image: {
    height: 175,
    width: 175,
    margin: 10,
    borderRadius: 175 / 2,
    borderWidth: 5,
  },
  imageHeader: {
    height: 250,
    width: '100%',
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: -205,
    padding: 15,
    borderRadius: 150 / 2,
  },
  header: {
    padding: 15,
    marginTop: -115,
    textShadowRadius: 2,
    textShadowOffset: { width: 1, height: 1 },
  },
  headerBody: {
    marginTop: -65,
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },
  body: {
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },
  bodySpace: {
    marginBottom: -15,
  },
  textInput: {
    height: 40,
    width: '75%',
    padding: 3,
    borderColor: 'blue',
    borderWidth: 3,
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'white',
    fontFamily: 'Kanit',
    fontSize: 17.5,
  },
  button: {
    height: 50,
    width: 100,
    borderRadius: 50 / 2,
    backgroundColor: 'purple',
    marginHorizontal: 20,
  },
  questionButton: {
    height: 50,
    width: 100,
    borderRadius: 50 / 2,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  buttonText: {
    paddingTop: 25,
    fontSize: 22.5,
    marginTop: -12.5,
  },
  registerButton: {
    height: 75,
    width: 225,
    marginTop: 20,
    borderRadius: 37.5,
  },
  registerText: {
    paddingTop: 25,
    fontSize: 22.5,
  },
  endingButton: {
    height: 75,
    width: 225,
    marginTop: 15,
    borderRadius: 37.5,
  },
  copyright: {
    padding: 15,
    marginTop: 40,
    marginBottom: 30,
    paddingBottom: 30,
  },
});
