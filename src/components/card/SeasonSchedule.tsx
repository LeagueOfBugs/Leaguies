import React, {useState} from 'react';
import {ScrollView, Alert} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {format, isSameDay, startOfDay} from 'date-fns';
import Card from './Card';
import usePlayerDetails from '../../hooks/usePlayerDetails';
import useExtractMatches from '../../hooks/useExtractMatches';
import {useNavigation} from '@react-navigation/native';

const SeasonSchedule = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const navigation = useNavigation();
  const {season} = usePlayerDetails();
  const matchesId = season.matches;
  const seasonStart = new Date(season.start);
  const seasonEnd = new Date(season.end);

  const matchesModel = useExtractMatches(matchesId);

  const handleDayPress = day => {
    setSelectedDay(day.dateString);
  };

  // Convert season start and end dates to YYYY-MM-DD format
  const minCalDate = format(seasonStart, 'yyyy-MM-dd');
  const maxCalDate = format(seasonEnd, 'yyyy-MM-dd');

  // Create marked dates object
  const markedDates = {};
  matchesModel.forEach(match => {
    const matchDate = new Date(match.date);
    const formattedDate = format(matchDate, 'yyyy-MM-dd');
    markedDates[formattedDate] = {
      selected: true,
      marked: true,
      selectedColor: 'blue',
    };
  });

  const handleFooterPress = () => {
    navigation.navigate('Match Form');
  };

  return (
    <ScrollView>
      <Card
        title="Calendar"
        footerText="Add an event"
        handleFooterPress={handleFooterPress}>
        <CalendarList
          markingType={'period'}
          pastScrollRange={1}
          futureScrollRange={1}
          horizontal={true}
          minDate={minCalDate}
          maxDate={maxCalDate}
          markedDates={markedDates}
          onDayPress={handleDayPress}
        />
      </Card>
    </ScrollView>
  );
};

export default SeasonSchedule;
