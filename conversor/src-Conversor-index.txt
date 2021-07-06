//https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=69a1a8534113f684a26a
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';

import api from "../services/api_moedas"

class Conversor extends Component{
  
    constructor(props){
     super(props);
     this.state={
        moedaA: this.props.moedaA,
        moedaB: this.props.moedaB,
        moedaB_valor: 0,
        valorConvertido: 0
     }

     this.converter = this.converter.bind(this)
    }

    async converter(){
        let de_para = this.state.moedaA + "_" + this.state.moedaB; //para se trocar de USD_BLR para BRL_USD, ele mudar em baixo
        const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=69a1a8534113f684a26a`)
        // recebeu { USD_BLR: valor}
        let cotacao = response.data[de_para] 
        //pra vir só o valor, responde recebe o objeto e não o valor

        let resultado = (cotacao * parseFloat(this.state.moedaB_valor))

        this.setState({
            valorConvertido: resultado.toFixed(2)
        })

        Keyboard.dismiss();
    }

    render(){
        const {moedaA, moedaB} = this.props;

        return(
            <View style={styles.container}>
                <Text style={styles.titulo}> {moedaA} para {moedaB}</Text>

                <TextInput 
                placeholder="Valor para ser convertido"
                keyboardType="numeric"
                style={styles.areaInput}
                onChangeText={ (moedaB_valor) => {
                    this.setState({moedaB_valor}) //igual moedaB_valor: moedaV_valor, pq tem o mesmo nome
                }}/>

                <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
                    <Text style={styles.botaoTexto}> Converter </Text>
                </TouchableOpacity>


                <Text style={styles.valorConvertido}>
                    {this.state.valorConvertido != 0 ? this.state.valorConvertido  : "" }
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    titulo:{
        fontSize: 30,
        fontWeight: "bold",
        
    },
    areaInput:{
        width: 210,
        height:37,
        backgroundColor: "#ccc",
        borderRadius: 8,
        textAlign:"center",
        fontSize: 18,
        marginTop: 18
    },
    botaoArea:{
        width: 150,
        height: 47,
        backgroundColor:"#f9a5c2d1",
        borderRadius: 8,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 18,
        marginBottom: 18
    },
    botaoTexto:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    },
    valorConvertido:{
        fontSize: 30,
        fontWeight: "bold"
    }

})

export default Conversor;
