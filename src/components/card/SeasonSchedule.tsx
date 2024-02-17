import React, {useState} from 'react';
import {ScrollView, Alert} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {format} from 'date-fns';
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
  console.log('matchesModel', matchesModel);
  // Convert season start and end dates to YYYY-MM-DD format
  const minCalDate = format(seasonStart, 'yyyy-MM-dd');
  const maxCalDate = format(seasonEnd, 'yyyy-MM-dd');

  // Create marked dates object
  const markedDates = {};
  matchesModel.forEach(match => {
    const matchDate = new Date(match.date);

    /*
    TODO
     */

    // Formatted date is not taking into account UTC and rounding day down due to TZ
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

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const calLimit = seasonEnd.getMonth();

  return (
    <ScrollView>
      <Card
        title="Calendar"
        footerText="Add an event"
        handleFooterPress={handleFooterPress}>
        <CalendarList
          markingType={'period'}
          pastScrollRange={currentMonth}
          futureScrollRange={calLimit}
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
