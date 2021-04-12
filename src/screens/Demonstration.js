import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Button, Image, Dimensions, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Swiper from 'react-native-swiper'
import commonStyles from '../utils/commonStyles'


export default function Demonstration(props) {


  const [notRepet, setNotRepet] = useState(false)

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={props.onCancel}>

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
            onPress={ () => props.onClose(notRepet)}>
            <Text style={[styles.text, { color: commonStyles.colors.background }]}>Começar</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: '25%' }}>
            <CheckBox
              value={notRepet}
              onValueChange={(newValue) => setNotRepet(newValue)}
              tintColors={{ true: '#FFBA00', false: commonStyles.colors.mainText }}
              style={{ alignSelf: "center", }}
            />
            <Text style={[styles.text, { fontSize: 18 }]}> Não mostrar instruções novamente.</Text>
          </View>

        </View>
      </Swiper>
    </Modal>
  )
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