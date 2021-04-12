import React, { Component } from 'react'
import { StyleSheet, Text, View, Modal, Button, Image, Dimensions, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper'
import commonStyles from '../utils/commonStyles'

export default class Demonstration extends Component {
    render() {
      return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}>

        <Swiper 
        style={styles.wrapper} 
        showsButtons={true} 
        loop={false}
        dotColor= {commonStyles.colors.opacityBackgroundColor}
        activeDotColor= {commonStyles.colors.borderLineColor}
        >
          <View style={styles.slide}>
            <Image style={{resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/0.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={{resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/1.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={{resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/2.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={{resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/3.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={{resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/4.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={{resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/5.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={{resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/6.png')} />
            <Button onPress={this.props.onCancel} title='Concluir' color={ commonStyles.colors.background }/>
          </View>          
          <View style={styles.slide}>
            <Button onPress={this.props.onCancel} title='Concluir' color={ commonStyles.colors.background }/>
          </View>
        </Swiper>
        </Modal>
      )
    }
  }

const styles = StyleSheet.create({
    wrapper: {
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: commonStyles.colors.background
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: commonStyles.colors.background
    },
    slide4: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: commonStyles.colors.background
    },
    slide5: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: commonStyles.colors.background
    },
    slide6: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: commonStyles.colors.background
    },
    slide7: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: commonStyles.colors.background
    },
    text: {
      textAlign: 'center',
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })