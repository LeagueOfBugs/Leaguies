import React, {memo, useCallback, useState} from 'react';
import {ScrollView} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {format} from 'date-fns';
import Card from './Card';
import useExtractMatches from '../../hooks/useExtractMatches';
import {useNavigation} from '@react-navigation/native';

const SeasonSchedule = ({season}) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const navigation = useNavigation();
  const matchesId = season.matches;
  const seasonStart = new Date(season.start);
  const seasonEnd = new Date(season.end);
  const matchesModel = useExtractMatches(matchesId);

  const handleDayPress = useCallback(day => {
    setSelectedDay(day.dateString);
  }, []);

  // FIX: THIS LOGS WAY TOO MANY TIME AT FIRST RENDER X7

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

  const handleFooterPress = useCallback(() => {
    navigation.navigate('Match Form');
  }, [navigation]);

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

export default memo(SeasonSchedule);
