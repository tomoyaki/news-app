import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ArticleScreen({ route }) {
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
