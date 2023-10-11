import { View, Text, ActivityIndicator, Button } from 'react-native'
import React, { useState } from 'react'
import WebView from 'react-native-webview'
import { StyleSheet } from 'react-native'
import { Pressable, Modal } from 'react-native'


const MyWebView = () => {

    const [isLoading, setLoading] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);

    let checkIfLoading = () => {
        //console.log(isLoading)
        if (isLoading)
            return <ActivityIndicator />
    }

    return (
        <View style={{ flex: 1 }}>

            {
                checkIfLoading()
            }

            <WebView
                source={{
                    uri: 'https://www.youtube.com/watch?v=XqZsoesa55w',
                }}
                javaScriptEnabled={true}
                scalesPageToFit={true}
                onLoadEnd={() => {
                    console.log('load end')
                    setLoading(false)
                }}
            />

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Xin chào bạn!!!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Ẩn Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>Hiện Modal</Text>
                </Pressable>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#fc9e4c',
    },
    buttonClose: {
        backgroundColor: '#fd1d80',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});


export default MyWebView