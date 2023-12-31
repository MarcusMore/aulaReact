import React from "react";
import {Image, StyleSheet, Dimensions, Text, SafeAreaView, View} from 'react-native'
import topo from '../../assets/topo.png' 
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <> 
        <SafeAreaView>
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.titulo}>Detalhe da Cesta</Text>
            <View style={estilos.cesta}>
                <Text style={estilos.nome}>Cesta de Verduras</Text>
                <View style={estilos.fazenda}>
                    <Image source={logo} style={estilos.imagemFazenda}/>
                    <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
                </View>
                <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazendo direto para a sua cozinha</Text>
                <Text style={estilos.preco}>R$ 40,00</Text>
            </View>
        </SafeAreaView>
        
    </>
}


const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: (578 / 768) * width
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 6
    },
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        fontFamily: "MontserratBold"
    },
    fazenda:{
        flexDirection: "row"
    },
    imagemFazenda:{
        width: 32,
        height: 32,
        paddingVertical: 12
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular"
    },
    descricao:{
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco:{
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});