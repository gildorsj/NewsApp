import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage'
import News from '../components/News'
import AddNews from './AddNews'
import ViewerNews from './ViewerNews'


const initialState = {
  search: '',
  payload: [],
  news: [],
  addNewsModal: false,
  viewerNewsModal: false,
  isDark: true,
  isDeleting: false,
}

class NewsList extends Component {

  state = {
    ...initialState
  }

  componentDidMount = async () => {
    const stateString = await AsyncStorage.getItem('newsState')
    const state = JSON.parse(stateString) || initialState
    this.setState(state)
  }

  saveOnStorage = () => {
    AsyncStorage.setItem('newsState', JSON.stringify(this.state))
  }

  openNews = payload => {
    this.setState({ payload }, this.setState({ viewerNewsModal: true }))
    this.delNews(payload.id)
  }

  closeNews = payload => {

  }

  addNews = newNews => {
    if (!newNews.author || !newNews.author.trim()) {
      Alert.alert('Autor vazio', 'Informe o autor!')
      return
    }
    if (!newNews.title || !newNews.title.trim()) {
      Alert.alert('Titulo vazio', 'Informe o titulo!')
      return
    }
    if (!newNews.notice || !newNews.notice.trim()) {
      Alert.alert('Noticia vazia', 'Informe a noticia!')
      return
    }
    const news = [...this.state.news]
    news.push({
      author: newNews.author,
      title: newNews.title,
      notice: newNews.notice,
      id: Math.random(),
    })
    this.setState({ news, addNewsModal: false, viewerNewsModal: false, }, this.saveOnStorage)
    Alert.alert(newNews.title, 'Noticia Salva')
  }

  delNews = id => {

    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      });
    const news = this.state.news.filter(news => news.id !== id)
    this.setState({ news }, this.saveOnStorage)
  }

  searchNews = newsList => {
    return newsList.filter(
      (listItem) =>
        listItem.notice.toLowerCase().includes(this.state.search.toLocaleLowerCase().trim()) ||
        listItem.author.toLowerCase().includes(this.state.search.toLocaleLowerCase().trim()) ||
        listItem.title.toLowerCase().includes(this.state.search.toLocaleLowerCase().trim()),
    )
  }

  render() {
    return (
      <View style={this.state.isDark ? styles.darkContainer : styles.lightContainer}>
        <AddNews
          isVisible={this.state.addNewsModal}
          onCancel={() => this.setState({ addNewsModal: false })}
          onSave={this.addNews} />
        <ViewerNews
          isVisible={this.state.viewerNewsModal}
          payload={this.state.payload}
          onBack={this.addNews} />
        <View style={styles.header}>
          <View style={styles.headerBar}>
            <TextInput
              style={{
                color: '#FFF',
                fontSize: 20,
                borderRadius: 7,
                padding: 2,
                margin: 2,
                flex: 0.6,
              }}
              placeholder='Pesquisar...'
              placeholderTextColor={'#949599'}
              onChangeText={search => this.setState({ search })}
              value={this.state.search} />
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.1,
              }}
              onPress={() => this.setState({ addNewsModal: true })}>
              <Icon name='plus' size={20} color='#FFF' />
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.1,
              }}
              onPress={() => this.setState({ isDeleting: !this.state.isDeleting })}>
              {this.state.isDeleting ? <Icon name='trash-o' size={20} color='#FFF' /> : <Icon name='trash' size={20} color='#FFF' />}
            </TouchableOpacity> */}
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.1,
              }}
              onPress={() => this.setState({ isDark: !this.state.isDark })}>
              {this.state.isDark ? <Icon name='moon-o' size={20} color='#FFF' /> : <Icon name='sun-o' size={20} color='#FFF' />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boby}>
          <ScrollView>
            {this.searchNews(this.state.news).map((filtedItem, index) => (
              <News
                key={filtedItem.id}
                {...filtedItem}
                onPress={() => this.openNews(filtedItem)}
                onLongPress={() => this.delNews(filtedItem.id)} />
            ))}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#202125',
  },
  header: {
    flex: 0.1,
    margin: '3%',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  headerBar: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 7,
    backgroundColor: '#2e2f33',
    height: '70%',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 50,
  },
  boby: {
    flex: 0.9,
  },
})

export default NewsList