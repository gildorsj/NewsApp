import React, { Component } from 'react'
import { StyleSheet, Text, View, Modal, Button, Image, Dimensions, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import commonStyles from '../utils/commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

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
          dotColor={commonStyles.colors.opacityBackgroundColor}
          activeDotColor={commonStyles.colors.borderLineColor}
        >
          <View style={styles.slide}>
            <Image style={{ resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/0.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={{ resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/1.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={{ resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/2.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={{ resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/3.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={{ resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/4.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={{ resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/5.png')} />
          </View>
          <View style={styles.slide}>
            <Image style={{ resizeMode: 'contain', height: Dimensions.get('window').height, }} source={require('../assets/6.png')} />
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>Tudo pronto!{'\n'}Vamos começar?{'\n'}{'\n'}</Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                backgroundColor: commonStyles.colors.mainText,
                padding: '3%',
              }}
              onPress={this.props.onCancel}>
              <Text style={[styles.text, { color: commonStyles.colors.background }]}>Começar</Text>
            </TouchableOpacity>

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
    color: commonStyles.colors.mainText,
    fontSize: 30,
    fontWeight: 'bold'
  }
})