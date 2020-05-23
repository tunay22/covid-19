import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class App extends Component {
  state = {
    data: '',
    dataCountry:'',
    dataCountry2:'',
  }
  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(user => user)
      .then(user => this.setState({ data: user.Global, dataCountry: user.Countries[177],
        dataCountry2: user.Countries[172]
      }))    
  }
  render() {
    const { data , dataCountry, dataCountry2} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.vaka}>
          <Text style={styles.baslık}>DÜNYA</Text>
          <Text>Yeni vaka sayısı : {data.NewConfirmed} </Text>
          <Text>Toplam vaka sayısı : {data.TotalConfirmed} </Text>
          <Text style={styles.olum}>Yeni ölü sayısı : {data.NewDeaths} </Text>
          <Text style={styles.olum}>Toplam ölü sayısı : {data.TotalDeaths} </Text>
        </View>
        <View style={styles.vaka}>
          <Text style={styles.baslık}>AMERİKA</Text>
          <Text>Yeni vaka sayısı : {dataCountry.NewConfirmed} </Text>
          <Text>Toplam vaka sayısı : {dataCountry.TotalConfirmed} </Text>
          <Text style={styles.olum}>Yeni ölü sayısı : {dataCountry.NewDeaths} </Text>
          <Text style={styles.olum}>Toplam ölü sayısı : {dataCountry.TotalDeaths} </Text>
          <Text style={styles.iyilesen}>Toplam iyileşen sayısı : {dataCountry.TotalRecovered} </Text>
        </View>
        <View style={styles.vaka}>
          <Text style={styles.baslık}>TÜRKİYE</Text>
          <Text>Yeni vaka sayısı : {dataCountry2.NewConfirmed} </Text>
          <Text>Toplam vaka sayısı : {dataCountry2.TotalConfirmed} </Text>
          <Text style={styles.olum}>Yeni ölü sayısı : {dataCountry2.NewDeaths} </Text>
          <Text style={styles.olum}>Toplam ölü sayısı : {dataCountry2.TotalDeaths} </Text>
          <Text style={styles.iyilesen}>Toplam iyileşen sayısı : {dataCountry2.TotalRecovered} </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#C0C6CC'
  },
  vaka:{
    alignItems:'center',
    paddingTop:50,
  },
  olum:{
    color:'#AE0C0C'
  },
  iyilesen:{
    color:'#3C9D54'
  },
  baslık:{
    color:'#195B97'
  }
})
