import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 40,
      justifyContent: 'space-evenly',
      backgroundColor: '#B0C4DE'
    },
    intro:{
      color: 'black',
      fontSize: 40,
      fontStyle: 'italic',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    textoIntro:{
      fontSize: 20,
      textAlign: 'center'
    },
    textos:{
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    botao:{
      backgroundColor:'#4169E1',
      borderWidth: 2,
      borderRadius: 30,
      marginLeft: 140,
      marginRight: 140,
      height: 40
    },
    txtBtn:{
      textAlign: 'center',
      marginTop: 5,
      fontWeight: 'bold'
    }
  });

  export default styles;