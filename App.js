import React, { Component } from "react";
import { View, Text, Switch, TextInput, Button, Alert } from "react-native";
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'
import { TouchableOpacity } from "react-native";
import styles from "./src/styles.js"

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: '',
      sexos: [
        {key:1, opcao: '- Selecione -'},
        {key:2, opcao: 'Masculino'},
        {key:3, opcao: 'Feminino'}
      ],
      limite: 0,
      estudante: false
    }

    this.nomeCompleto = this.nomeCompleto.bind(this);
    this.idadeUser = this.idadeUser.bind(this);
    this.criar = this.criar.bind(this);
  }

  nomeCompleto(nomeUsuario){
    if (nomeUsuario) {
      this.setState({nome: nomeUsuario})
    }
  }

  idadeUser(idadeUsuario){
    if (idadeUsuario) {
      this.setState({idade: idadeUsuario})
    }
  }

  criar(){
    if (this.state.nome == '' || this.state.idade == '' || this.state.sexo == '') {
      Alert.alert("Atenção!",
        `${"Preencha todos os campos."}`)
    } else {
      Alert.alert( "Seus dados",
                  `Nome: ${this.state.nome}\n` +
                  `Sua idade: ${this.state.idade}\n` +
                  `Sexo selecionado: ${this.state.sexo}\n` +
                  `Limite: R$ ${this.state.limite.toFixed(0)}\n` +
                  `É estudante? ${this.state.estudante ? 'Sim' : 'Não'}`
      )
    }
  }

  render(){

    let sexosOpcao = this.state.sexos.map( (v) => {
      return <Picker.Item key={v.key} value={v.opcao} label={v.opcao} />
    })

    return(
      <View style={styles.container}>
        <Text style={styles.intro}>Seja bem vindo!</Text>
        <Text style={styles.textoIntro}>Para começar, informe seus dados:</Text>
        <Text style={styles.textos}>Nome completo</Text>
        <TextInput
          selectionColor="#4169E1"
          style={{textAlign: 'center'}}
          placeholder="Seu nome completo" 
          onChangeText={this.nomeCompleto}
        />
        <Text style={styles.textos}>Sua idade</Text>
        <TextInput
          keyboardType="numeric"
          selectionColor="#4169E1"
          style={{textAlign: 'center'}}
          placeholder="Sua idade" 
          onChangeText={this.idadeUser}
        />
        <View>
          <Text style={styles.textos}>Sexo</Text>
          <Picker
            style={{width: 180, marginLeft: 148}}
            selectedValue={this.state.sexo}
            onValueChange={(itemValue)=> this.setState({sexo:itemValue})}
          >
            {sexosOpcao}
          </Picker>
        </View>  
        <View styles={{flex:1}}>
          <Text style={styles.textos}>Seu limite: R$ {this.state.limite.toFixed(0)}</Text>
          <Slider
            thumbTintColor="#4169E1"
            minimumTrackTintColor="#4169E1"
            minimumValue={0}
            maximumValue={3999}
            onValueChange={(valorLimite)=>this.setState({limite: valorLimite})}
            value={this.state.limite}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.textos}>Estudante</Text>
          <Switch
            thumbColor={"#4169E1"}
            trackColor={{true: "#4682B4"}}
            value={this.state.estudante}
            onValueChange={(statusEstudante)=> this.setState({estudante: statusEstudante})}
          />
        </View>
        <TouchableOpacity
          style={styles.botao}
          onPress={this.criar}>
          <Text style={styles.txtBtn}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

