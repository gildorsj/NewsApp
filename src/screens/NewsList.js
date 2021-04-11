import React, { Component } from 'react'
import {
  View,
  StyleSheet,
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
import commonStyles from '../utils/commonStyles'


const initialState = {
  search: '',
  payload: [],
  news: [],
  addNewsModal: false,
  viewerNewsModal: false,
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

  addNews = newNews => {
    if (!newNews.author || !newNews.author.trim()) {
      Alert.alert('Autor em branco', 'Este campo precisa ser preenchido!')
      return
    }
    if (!newNews.title || !newNews.title.trim()) {
      Alert.alert('Título em branco', 'Este campo precisa ser preenchido!')
      return
    }
    if (!newNews.notice || !newNews.notice.trim()) {
      Alert.alert('Notícia em branco', 'Este campo precisa ser preenchido!')
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

  confirmDel = id => {
    Alert.alert(
      "Atenção",
      "Confirmar exclusão?",
      [{
        text: "Cancelar",
        onPress: () => {},
        style: 'cancel'
      }, {
        text: "Confirmar",
        onPress: () => this.delNews(id),
        style: 'default',
      }], { cancelable: true });
  }

  delNews = id => {
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
      <View style={styles.Container}>
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
              style={ styles.searchBar }
              placeholder='Pesquisar...'
              placeholderTextColor={commonStyles.colors.placeHolder}
              onChangeText={search => this.setState({ search })}
              value={this.state.search} />
            <TouchableOpacity
              style={ styles.button }
              onPress={() => this.setState({ addNewsModal: true })}>
              <Icon name='plus' size={20} color={commonStyles.colors.mainText} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 0.9}}>
          <ScrollView>
            {this.searchNews(this.state.news).map((filtedItem, index) => (
              <News
                key={filtedItem.id}
                {...filtedItem}
                onPress={() => this.openNews(filtedItem)}
                onLongPress={() => this.confirmDel(filtedItem.id)} />
            ))}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: commonStyles.colors.background,
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
    backgroundColor: commonStyles.colors.headerBar,
    height: '70%',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 50,
  },
  searchBar: {
    color: commonStyles.colors.mainText,
    fontSize: 20,
    borderRadius: 20,
    padding: 2,
    paddingLeft: '5%',
    flex: 0.8,
    backgroundColor: commonStyles.colors.opacityBackgroundColor,
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.1,
    borderRadius: 40,
    height: '70%',
    backgroundColor: commonStyles.colors.opacityBackgroundColor,
  }
})

export default NewsList