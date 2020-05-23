import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList,TextInput } from 'react-native'


export default class App extends Component {
  state = {
    data: [],
    gelendatafull :[],
    text:'',
  }
  

  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(user => user)
      .then(user => this.setState({ data: user.Countries , gelendatafull:user.Countries}))
  }
  searchFilter = text =>{
    const newData = this.state.gelendatafull.filter(item => {
      const ListItem =`${item.Country.toLowerCase()}`

      return ListItem.indexOf(text.toLowerCase()) > -1;
    });
    this.setState({
      data:newData,
    });
  };
  renderHeader = () => {
    const { text } = this.state;
    return (
      <View>
        <TextInput
          onChangeText={text =>{
            this.searchFilter(text);
            this.setState({
              text,
            });
          }}
          placeholder="ARAMA ...  " style={styles.search}></TextInput>
      </View>
    )
  }

  renderApiItem = ({ item, index }) => {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 35 ,fontStyle:'italic'}}>{item.Country}</Text>
          <View style ={styles.container2} >
            <Text>Yeni vaka sayısı : {item.NewConfirmed}</Text>
            <Text>Toplam vaka sayısı: {item.TotalConfirmed}</Text>
            <Text style={styles.olum}>Bugün ölen sayısı : {item.NewDeaths}</Text>
            <Text style={styles.olum}>Toplam ölen sayısı : {item.TotalDeaths}</Text>
            <Text style={styles.iyilesen}>Bugün iyileşen sayısı : {item.NewRecovered}</Text>
            <Text style={styles.iyilesen}>Toplam iyileşen sayısı : {item.TotalRecovered}</Text>
            <Text>Tarih : {item.Date}</Text>
          </View>
        </View>
      </View>
    )
  };
  render() {
    const { data } = this.state;
    return (
      <View style={styles.page}>
        <FlatList
          renderItem={this.renderApiItem}
          ListHeaderComponent={this.renderHeader()}
          keyExtractor={item => item.CountryCode}
          data={data} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:'#E9D2E9',
  },
  container: {
    alignItems: 'baseline',
    marginLeft: 10,
    backgroundColor:'#E9D2E9',
  },
  olum:{
    color:'#AE0C0C'
  },
  iyilesen:{
    color:'#3C9D54'
  },
  search: {
    alignItems:'center',
    marginLeft: 20,
    padding: 10,
    backgroundColor:'#FFFEFF',
    width:370,
    borderRadius:30,
    marginTop:10,
  }
})

