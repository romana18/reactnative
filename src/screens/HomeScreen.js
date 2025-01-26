import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    { id: '1', image: 'https://via.placeholder.com/350x150' },
    { id: '2', image: 'https://via.placeholder.com/350x150' },
  ];

  const testimonialsData = [
    { id: '1', name: 'John Doe', feedback: 'This app is amazing for health services!' },
    { id: '2', name: 'Jane Smith', feedback: 'Very easy to use and reliable.' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi, First Name</Text>
          <Text style={styles.location}>Add location</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Text>🔔</Text>
          <Text>🛒</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search for medicines and doctors" />
      </View>

      {/* Carousel */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
      >
        {carouselData.map((item) => (
          <Image key={item.id} source={{ uri: item.image }} style={styles.carouselImage} />
        ))}
      </ScrollView>

      {/* Carousel Dots */}
      <View style={styles.dotsContainer}>
        {carouselData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      {/* Services Section */}
      <Text style={styles.sectionTitle}>Services</Text>
      <View style={styles.servicesContainer}>
        {['Book Appointment', 'Instant Video Consultation', 'Buy Medicines', 'Beauty Products'].map(
          (service, index) => (
            <View key={index} style={styles.serviceCard}>
              <Text style={styles.serviceText}>{service}</Text>
            </View>
          )
        )}
      </View>

      {/* Health Tips Section */}
      <Text style={styles.sectionTitle}>Health Tips</Text>
      <View style={styles.tipsContainer}>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>Tip 1: Drink plenty of water to stay hydrated!</Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>Tip 2: Get at least 8 hours of sleep every night.</Text>
        </View>
      </View>

      {/* Testimonials Section */}
      <Text style={styles.sectionTitle}>Testimonials</Text>
      <View style={styles.testimonialsContainer}>
        {testimonialsData.map((testimonial) => (
          <View key={testimonial.id} style={styles.testimonialCard}>
            <Text style={styles.testimonialName}>{testimonial.name}</Text>
            <Text style={styles.testimonialFeedback}>{testimonial.feedback}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  greeting: { fontSize: 16, fontWeight: 'bold' },
  location: { fontSize: 12, color: '#777' },
  iconsContainer: { flexDirection: 'row', gap: 20 },
  searchContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 40,
  },
  carouselContainer: { marginTop: 10 },
  carouselImage: {
    width: width - 40,
    height: 150,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: { backgroundColor: '#007AFF' },
  inactiveDot: { backgroundColor: '#ccc' },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  serviceCard: {
    width: '40%',
    height: 100,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tipsContainer: { padding: 10 },
  tipCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  tipText: { fontSize: 14, color: '#333' },
  testimonialsContainer: { padding: 10 },
  testimonialCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  testimonialName: { fontWeight: 'bold', fontSize: 14, marginBottom: 5 },
  testimonialFeedback: { fontSize: 12, color: '#555' },
});

export default HomeScreen;
