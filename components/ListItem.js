import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ListItem = ({ imageUrl, title, author }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        {!!imageUrl && (
          <Image style={styles.newsImage} source={{ uri: imageUrl }} />
        )}
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.newsTitle}>
          {title}
        </Text>
        <Text style={styles.newsAuthor}>{author}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.5,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  newsImage: {
    width: 100,
    height: 100,
  },
  newsTitle: {
    fontSize: 16,
  },
  newsAuthor: {
    fontSize: 12,
    color: 'gray',
  },
});
