import React, {useState, useRef} from 'react'
import {View,Text, StyleSheet, TextInput, TouchableOpacity,
   SafeAreaView, Keyboard} from 'react-native'
 //-> faz ele na área certa da tela
import api from './src/services/api_cep'


export default function App(){

  const [cep,setCep]= useState("")
  const inputRef= useRef(null)

  const[cepUser, setCepUser] = useState("") //criou pra armazenar a response da api


  async function buscar(){

    if(cep == ''){
      alert("Digite um cep Válido")
      setCep('')
      return;
    }

    try{
      const response = await api.get(`${cep}/json`)
      console.log(response.data)
      setCepUser(response.data)//recebe a response da api
      //sem colocar a response em uma variavel, não tem como mostrar no texto da resposta
      Keyboard.dismiss()

    }catch(error){
      console.log("Error" + error)
    }
   

  }

  
  function limpar(){
    setCep('')
    setCepUser('')
    inputRef.current.focus();
  }

  

  return(
    <SafeAreaView style={styles.container}>
      

      <View style={{alignItems:'center'}}>
      <Text style={styles.title}> Digite o cep desejado</Text>
      <TextInput
      style={styles.input}
      placeholder="Digite o CEP"
      value={cep}
      onChangeText={ newCep => setCep(newCep)}
      keyboardType= "numeric"
      ref={inputRef}
      />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor:"#457832"}]}
        onPress={buscar}>
          <Text style={styles.btnText}> Buscar </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, {backgroundColor:"#4cd942"}]}
        onPress={limpar}>
          <Text style={styles.btnText}> Limpar </Text>
        </TouchableOpacity>
        
      </View>


    
      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: {cepUser.cep} </Text>
        <Text style={styles.itemText}>LOG: {cepUser.logradouro} </Text>
        <Text style={styles.itemText}>Bar: {cepUser.bairro} </Text>
        <Text style={styles.itemText}>Cid: {cepUser.localidade} </Text>
        <Text style={styles.itemText}>Est: {cepUser.uf}</Text>
        
      </View>
      
      
     
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ddd",
    
    
  },
  title:{
    marginTop:10,
    marginBottom: 15,
    fontSize: 25,
    fontWeight:"bold"
  },
  input:{
    backgroundColor:"#fff",
    width: '90%',
    height: 40,
    padding: 10,
    borderRadius: 8,
    fontSize: 18
  },

  areaBtn:{
    flexDirection:"row",
    marginTop: 19,
    justifyContent:"space-around",
    alignItems:"center",
  },
  botao:{
    height: 50,
    width: 80,
    padding: 10,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center"
  },
  btnText:{
    fontSize: 15,
    fontWeight:"bold",
    color:"#fff"
  },
  
  resultado:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  itemText:{
    fontSize:22
  }
  



})