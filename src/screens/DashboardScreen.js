import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Svg, { Circle } from 'react-native-svg';
import { Dimensions } from 'react-native';

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
      <View style={styles.section}>
        <Text style={styles.title}>Performance</Text>
        <LineChart
          data={performanceData}
          width={screenWidth - 30}
          height={220}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            style: { borderRadius: 16 },
          }}
          bezier
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Health Insights</Text>
        {healthInsights.map((item, index) => (
          <View key={index} style={styles.insightItem}>
            <Text style={styles.insightTitle}>{item.title}</Text>
            <View style={styles.insightValue}>
              <Text style={styles.insightValueText}>{item.value}</Text>
            </View>
            {renderRing(index * 33 + 50)}
          </View>
        ))}
      </View>

      {/* Quick Access, Services, and Appointments would follow here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  insightItem: {
    marginBottom: 15,
    alignItems: 'center',
  },
  insightTitle: {
    fontSize: 18,
    color: '#555',
  },
  insightValue: {
    marginTop: 5,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  insightValueText: {
    fontSize: 16,
    color: '#333',
  },
});

export default DashboardScreen;
