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
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing Icon library

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    { id: '1', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg' },
    { id: '2', image: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg' },
  ];

  const testimonialsData = [
    {
      id: '1',
      name: 'John Doe',
      feedback: 'This app is amazing for health services!',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '2',
      name: 'Jane Smith',
      feedback: 'Very easy to use and reliable.',
      image: 'https://via.placeholder.com/50',
    },
  ];

  const services = [
    { id: '1', name: 'Book Appointment', icon: 'calendar-today' },
    { id: '2', name: 'Video Consultation', icon: 'video-call' },
    { id: '3', name: 'Buy Medicines', icon: 'medical-services' },
    { id: '4', name: 'Beauty Products', icon: 'spa' },
  ];

  const onScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.profileIcon}
          />
          <View>
            <Text style={styles.greeting}>Hi, John</Text>
            <Text style={styles.location}>Add location</Text>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <Icon name="notifications" size={24} color="#000" />
          <Icon name="shopping-cart" size={24} color="#000" style={{ marginLeft: 20 }} />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search for medicines and doctors" />
      </View>

      {/* Carousel */}
      <FlatList
        data={carouselData}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        contentContainerStyle={styles.carouselContainer}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
        )}
      />

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
        {services.map((service) => (
          <TouchableOpacity key={service.id} style={styles.serviceCard}>
            <Icon name={service.icon} size={30} color="#007AFF" />
            <Text style={styles.serviceText}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Health Tips Section */}
      <Text style={styles.sectionTitle}>Health Tips</Text>
      <View style={styles.tipsContainer}>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>Tip: Stay hydrated by drinking plenty of water daily!</Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>Tip: Get at least 8 hours of sleep to boost immunity.</Text>
        </View>
      </View>

      {/* Testimonials Section */}
      <Text style={styles.sectionTitle}>Testimonials</Text>
      <View style={styles.testimonialsContainer}>
        {testimonialsData.map((testimonial) => (
          <View key={testimonial.id} style={styles.testimonialCard}>
            <Image
              source={{ uri: testimonial.image }}
              style={styles.testimonialImage}
            />
            <View>
              <Text style={styles.testimonialName}>{testimonial.name}</Text>
              <Text style={styles.testimonialFeedback}>{testimonial.feedback}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  profileContainer: { flexDirection: 'row', alignItems: 'center' },
  profileIcon: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  greeting: { fontSize: 18, fontWeight: 'bold' },
  location: { fontSize: 12, color: '#777' },
  iconsContainer: { flexDirection: 'row' },
  searchContainer: {
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
    height: 200,
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
    marginHorizontal: 5,
  },
  activeDot: { backgroundColor: '#007AFF' },
  inactiveDot: { backgroundColor: '#ccc' },
  sectionTitle: {
    fontSize: 20,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  serviceText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  tipsContainer: { padding: 10 },
  tipCard: {
    padding: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tipText: { fontSize: 16, color: '#333' },
  testimonialsContainer: { padding: 10 },
  testimonialCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  testimonialImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  testimonialName: { fontWeight: 'bold', fontSize: 16 },
  testimonialFeedback: { fontSize: 14, color: '#555' },
});

export default HomeScreen;
