import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 8,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CarouselItem;
