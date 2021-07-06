import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

class Filmes extends Component{
    render(){
        const {nome, foto} = this.props.data;

        return(
          <View>

              <View style={styles.card}>
                  <Text style={styles.titulo}>{nome}</Text>

                  <Image
                  source={{uri: foto}} //uri porque a foto ta em link
                  style={styles.capa}
                  />

                 <View style={styles.Areabotao}>
                     <TouchableOpacity style={styles.botao} onPress={() => alert(nome)}> 
                         <Text style={styles.botaoTexto}>Leia mais</Text>
                     </TouchableOpacity>
                 </View>
                  
              </View>
                
         </View>

        )
    }
}

const styles = StyleSheet.create({
   card:{
    shadowColor:'#000',
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3
   },

   titulo:{
    fontSize: 18,
    padding:15
  },
  
  capa:{
      height: 150,
      borderRadius: 8,
      zIndex: 1
  },

  Areabotao:{
      alignItems:"flex-end",
      marginTop: -40,
      zIndex: 9
  },
  botao:{
      width:100,
      backgroundColor: '#09a6ff',
      padding: 8,
      alignItems: "center",
      borderTopLeftRadius:8,
      borderBottomLeftRadius: 8

  },
  botaoTexto:{
      fontWeight:'bold',
      color: "#fff"
  }



})

export default Filmes;