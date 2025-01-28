import React, { useState } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing Icon library

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
const scrollX = new Animated.Value(0); // Declare scrollX value

const HomeScreen = ({ navigation }) =>  {
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
    { id: 1, src: 'https://i.ibb.co/Z2sDJ7M/english-teacher-doing-her-lessons-online.jpg', text: 'Online Consultation' },
    { id: 2, src: 'https://i.ibb.co/rdnRXFt/gynecologist-evaluating-pregnancy-with-patient.jpg', text: 'OPD/Clinical Appointment' },
    { id: 3, src: 'https://i.ibb.co/89hswTM/close-up-laboratory-desk-with-professional-research-equipment-tray-vacutainers-with-blood-microscopi.jpg', text: 'Book Lab Tests' },
    { id: 4, src: 'https://i.ibb.co/7JZwFdq/450079-PEZQXQ-805.jpg', text: 'Emergency Ambulance' },
  ];

  const healthTips = [
    { id: 1, icon: 'local-drink', tip: 'Stay Hydrated' },
    { id: 2, icon: 'directions-run', tip: 'Exercise Daily' },
    { id: 3, icon: 'nightlight-round', tip: 'Sleep Well' },
    { id: 4, icon: 'favorite-border', tip: 'Heart Health' },
  ];

  const specialists = [
    { id: 1, icon: 'favorite', name: 'Cardiologist', description: 'Heart and blood vessels' },
    { id: 2, icon: 'face', name: 'Dermatologist', description: 'Skin, hair, and nails' },
    { id: 3, icon: 'visibility', name: 'Ophthalmologist', description: 'Eyes and vision' },
  ];

  const reviews = [
    { 
      id: 1, 
      text: 'Excellent service, very professional!', 
      name: 'Alice Brown', 
      rating: 5, 
      photo: 'https://i.ibb.co/6J0CcbM/user1.jpg' 
    },
    { 
      id: 2, 
      text: 'Highly recommend this clinic.', 
      name: 'Michael Smith', 
      rating: 4.5, 
      photo: 'https://i.ibb.co/F6ZfFMm/user2.jpg' 
    },
    { 
      id: 3, 
      text: 'Caring staff and great facilities.', 
      name: 'Sophia Johnson', 
      rating: 5, 
      photo: 'https://i.ibb.co/x3zBTHY/user3.jpg' 
    },
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
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={styles.profileContainer}>
            <View style={[styles.profileCircle, { backgroundColor: '#02989D' }]}>
              <Text style={styles.profileText}>EH</Text>
            </View>
            <Text style={styles.profileName}>Ewa Healthcare</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bellIcon}>
          <MaterialIcons name="notifications" size={30} color="#02989D" />
        </TouchableOpacity>
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
      <View style={[styles.sectionHeader, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
  <Text style={styles.sectionTitle}>Our Services</Text>
  <TouchableOpacity onPress={() => navigation.navigate('ServicesPage')}>
    <Text style={[styles.exploreLink, { color: '#02989D' }]}>
      Explore All <MaterialIcons name="arrow-forward" size={16} />
    </Text>
  </TouchableOpacity>
</View>

      <View style={styles.serviceContainer}>
        {services.map((service) => (
          <TouchableOpacity key={service.id} style={styles.serviceCard} onPress={() => router.replace('/(tabs)/services')}>
            <Image source={{ uri: service.src }} style={styles.serviceImage} />
            <Text style={styles.serviceText}>{service.text}</Text>
          </TouchableOpacity>
        ))}
      </View>


      <View style={{ padding: 20, backgroundColor: "#fff", marginVertical: 10, borderRadius: 10 }}>
             <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333", marginBottom: 10 }}>
               Partner Hospitals
             </Text>
             <Animated.FlatList
               data={[
                     { id: '1', image: require('../../assets/images/1.png') },
                     { id: '2', image: require('../../assets/images/2.png') },
                     { id: '3', image: require('../../assets/images/3.png') },
                     { id: '4', image: require('../../assets/images/4.png') },
                     { id: '5', image: require('../../assets/images/5.png') },
                     { id: '6', image: require('../../assets/images/6.png') },
                     { id: '7', image: require('../../assets/images/7.png') },
                     { id: '8', image: require('../../assets/images/8.png') },
                     { id: '9', image: require('../../assets/images/9.png') },
                     { id: '10', image: require('../../assets/images/10.png') },
                     { id: '11', image: require('../../assets/images/11.png') },
                     { id: '12', image: require('../../assets/images/12.png') },
                     { id: '13', image: require('../../assets/images/13.png') },
                   ]}
               keyExtractor={(item) => item.id}
               horizontal
               pagingEnabled
               showsHorizontalScrollIndicator={false}
               onScroll={Animated.event(
                 [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                 { useNativeDriver: false }
               )}
               renderItem={({ item }) => (
                 <View style={{ justifyContent: "center", alignItems: "center" }}>
                   <Image
                     source={ item.image }
                     style={{ height: 100, width: 310,borderRadius: 15 }}
                   />
                 </View>
               )}
             />
           </View>

      {/* New Section: Health Tips */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Health Tips</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.healthTipsContainer}>
        {healthTips.map((tip) => (
          <View key={tip.id} style={styles.healthTipCard}>
            <MaterialIcons name={tip.icon} size={40} color="#02989D" />
            <Text style={styles.healthTipText}>{tip.tip}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Specialists</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.specialistsContainer}>
        {specialists.map((specialist) => (
          <View key={specialist.id} style={styles.specialistCard}>
            <MaterialIcons name={specialist.icon} size={40} color="#02989D" />
            <Text style={styles.specialistName}>{specialist.name}</Text>
            <Text style={styles.specialistDescription}>{specialist.description}</Text>
            <TouchableOpacity
                                onPress={() => Linking.openURL('https://wa.me/+919686638384')}
                                style={{
                                  backgroundColor: '#02989D',
                                  paddingVertical: 8,
                                  paddingHorizontal: 20,
                                  borderRadius: 20,
                                  alignSelf: 'center',
                                  height: 35,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  paddingTop: 10, // Added top padding for button
                                  paddingBottom: 10, // Added bottom padding for button
                                }}
                              >
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Book Now</Text>
                              </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      

      {/* New Section: Reviews */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>What Our Clients Say</Text>
      </View>
      {/* Reviews Section */}
<ScrollView
  horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  style={styles.reviewsContainer}
>
  {reviews.map((review) => (
    <View key={review.id} style={styles.reviewCard}>
      <Image source={{ uri: review.photo }} style={styles.reviewPhoto} />
      <Text style={styles.reviewText}>"{review.text}"</Text>
      <Text style={styles.reviewName}>- {review.name}</Text>
      <Text style={styles.reviewRating}>Rating: {review.rating} ⭐</Text>
    </View>
  ))}
</ScrollView>

  
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
  healthTipsContainer: {
    marginBottom: 20,
    padding:10,
  },
  healthTipCard: {
    width: 120,
    backgroundColor: '#E8F4FA',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  healthTipText: {
    marginTop: 10,
    
    fontSize: 14,
    color: '#005a9c',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#005a9c',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  profileText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 18,
    color: '#333',
  },
  profileIcon: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  greeting: { fontSize: 18, fontWeight: 'bold' },
  location: { fontSize: 12, color: '#777' },
  iconsContainer: { flexDirection: 'row' },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  exploreLink: {
    fontSize: 16,
    color: '#005a9c',
 
    marginRight:10,
    marginTop:20
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
  serviceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding:10
  },
  serviceCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  serviceImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  serviceText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
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

  specialistsContainer: {
    marginBottom: 20,
  },
  specialistCard: {

    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginRight: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  specialistName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  specialistDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  specialistButton: {
    backgroundColor: '#005a9c',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  specialistButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  reviewsContainer: {
    marginBottom: 30,
  },
  reviewCard: {

    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginRight: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  reviewText: {
    fontSize: 16,
    color: '#333',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  reviewName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  reviewRating: {
    fontSize: 14,
    color: '#005a9c',
    fontWeight: 'bold',
  },
  reviewPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },

});

export default HomeScreen;
