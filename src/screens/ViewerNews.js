import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const initialState = {
  author: '',
  title: '',
  notice: '',
}

class ViewerNews extends Component {

  state = {
    ...initialState
  }



  // componentDidUpdate = () => {
  //   this.setState ({
  //     author: this.props.payload.author,
  //     title: this.props.payload.title,
  //     notice: this.props.payload.notice,
  //   })
  // }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}>
        <View style={styles.modalConteiner}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Icon name='arrow-left' size={20} color='#FFF' />
            </TouchableOpacity>
            <Text style={{
              color: '#FFF',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
              {this.props.payload.title}
            </Text>
            <TouchableOpacity onPress={this.save}>
            <Icon name='edit' size={20} color='#FFF' />
            </TouchableOpacity>
          </View>

          <View style={styles.modalBody}>
            <ScrollView>
              <TextInput style={{
                paddingBottom: 0,
                marginBottom: 0,
                color: '#FFF',
                fontSize: 20,
              }}
                editable={false}
                placeholder="Título"
                placeholderTextColor={'#5e5f63'}
                onChangeText={title => this.setState({ title })}
                value={this.props.payload.title} />
              <TextInput
                style={{
                  paddingTop: 0,
                  marginTop: 0,
                  color: '#FFF',
                  fontStyle: 'italic',
                }}
                editable={false}
                placeholder="Autor"
                placeholderTextColor={'#5e5f63'}
                onChangeText={author => this.setState({ author })}
                value={this.props.payload.author} />
              <TextInput
                style={{
                  flex: 1,
                  textAlign: 'left',
                  textAlignVertical: 'top',
                  color: '#FFF',
                }}
                editable={false}
                multiline={true}
                placeholder="Texto"
                placeholderTextColor={'#5e5f63'}
                onChangeText={notice => this.setState({ notice })}
                value={this.props.payload.notice} />

            </ScrollView>

          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({

  modalConteiner: {
    flex: 1,
    backgroundColor: '#202125',
    padding: '4%',
  },
  modalHeader: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 30,
  },
  modalBody: {
    flex: 0.95,
    paddingVertical: '4%'
  },
})

export default ViewerNews