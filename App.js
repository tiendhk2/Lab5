import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import MyWebView from './MyWebView';
import { useEffect, useState } from 'react';

export default function App() {

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      console.log('vao useEffect')
      setLoading(false)
    }, 6000)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        
        <MyWebView />

        <ActivityIndicator animating = {isLoading}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
