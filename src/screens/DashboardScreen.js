import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { LineChart, BarChart, PieChart, ProgressChart } from 'react-native-chart-kit';
import Svg, { Circle } from 'react-native-svg';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons';

const screenWidth = Dimensions.get('window').width;

const DashboardScreen = () => {
  const performanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [80, 85, 90, 95, 88, 92, 85],
      },
    ],
  };

  const quickActions = [
    { id: 1, icon: 'event-note', text: 'Book Appointment' },
    { id: 2, icon: 'file-copy', text: 'View Reports' },
    { id: 3, icon: 'local-pharmacy', text: 'Order Medicines' },
    { id: 4, icon: 'info', text: 'Help & Support' },
  ];
  
  const popularServices = [
    { id: 1, text: 'Cardiology', icon: 'favorite' },
    { id: 2, text: 'Neurology', icon: 'psychology' },
    { id: 3, text: 'Paediatrics', icon: 'child-care' },
    { id: 4, text: 'Oncology', icon: 'healing' },
    { id: 5, text: 'Dermatology', icon: 'spa' },
  ];

  const healthInsights = [
    { title: 'Steps Taken', value: '10,000', color: '#FF6347' },
    { title: 'Calories Burned', value: '300 kcal', color: '#3b5998' },
    { title: 'Water Intake', value: '2L', color: '#32CD32' },
  ];

  const renderRing = (percentage) => {
    const radius = 40;
    const strokeWidth = 10;
    const circunference = 2 * Math.PI * radius;
    const strokeDashoffset = circunference - (circunference * percentage) / 100;

    return (
      <Svg width={100} height={100} viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#ddd"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx="50"
          cy="50"
          r={radius}
          stroke={percentage < 50 ? '#FF6347' : '#3b5998'}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circunference}
          strokeDashoffset={strokeDashoffset}
        />
      </Svg>
    );
  };

  return (
    <ScrollView style={styles.container}>
 
    {/* Additional Metrics */}
    <View style={styles.sectionContainer}>

        <Card style={styles.metricCard}>
          <Title style={styles.metricTitle}>Service Distribution</Title>
          <PieChart
            data={[
              { name: 'Cardiology', population: 40, color: '#FF6384', legendFontColor: '#333', legendFontSize: 12 },
              { name: 'Neurology', population: 30, color: '#36A2EB', legendFontColor: '#333', legendFontSize: 12 },
              { name: 'Paediatrics', population: 20, color: '#FFCE56', legendFontColor: '#333', legendFontSize: 12 },
              { name: 'Others', population: 10, color: '#AA65CC', legendFontColor: '#333', legendFontSize: 12 },
            ]}
            width={screenWidth - 40}
            height={200}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'15'}
          />
        </Card>
        <Card style={styles.metricCard}>
          <Title style={styles.metricTitle}>Monthly Progress</Title>
          <ProgressChart
            data={{
              labels: ['Tests', 'Consultations', 'Medicines'],
              data: [0.7, 0.5, 0.9],
            }}
            width={screenWidth - 40}
            height={200}
            chartConfig={chartConfig}
          />
        </Card>
      </View>
  
            {/* Quick Access */}
            <View style={styles.sectionContainer}>
        <Title style={styles.sectionTitle}>Quick Access</Title>
        <View style={styles.gridContainer}>
          {quickActions.map((action) => (
            <TouchableOpacity key={action.id} style={styles.gridItem}>
              <View style={styles.iconWrapper}></View>
              <Text style={styles.gridText}>{action.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Quick Access, Services, and Appointments would follow here */}
         {/* Recently Viewed Services */}
         <View style={styles.sectionContainer}>
        <Title style={styles.sectionTitle}>Recently Viewed</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popularServices.map((service) => (
            <TouchableOpacity key={service.id} style={styles.serviceCard}>
              <Text style={styles.serviceText}>{service.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};
const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(0, 90, 156, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: { borderRadius: 16 },
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#F7F8FA',paddingTop:10,paddingBottom:70, },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  sectionContainer: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  sectionHeader: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  exploreLink: {
    fontSize: 16,
    color: '#005a9c',
    fontWeight: 'bold',
  },
  metricCard: { width: screenWidth - 40, borderRadius: 10, overflow: 'hidden', marginVertical: 10, backgroundColor: '#FFF', padding: 10, elevation: 3 },
  metricTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  gridItem: { width: '45%', alignItems: 'center', marginBottom: 20 },
  iconWrapper: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#E3F2FD', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  gridText: { fontSize: 14, textAlign: 'center' },
  serviceCard: { width: 100, alignItems: 'center', marginRight: 15, backgroundColor: '#FFF', padding: 10, borderRadius: 10, elevation: 3 },
  serviceText: { marginTop: 10, fontSize: 12, textAlign: 'center', color: '#333' },
  appointmentCard: { borderRadius: 10, backgroundColor: '#FFF', marginBottom: 10, elevation: 3 },
  appointmentTitle: { fontSize: 16, fontWeight: 'bold' },
});

export default DashboardScreen;
