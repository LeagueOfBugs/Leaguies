import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendars';
import {format} from 'date-fns';
import {useSelector} from 'react-redux';
import {
  selectSeasons,
  selectSeasonsObjByLeagueId,
} from '../selectors/seasonSelector';

const LeagueCalendar = ({markedDates, route}) => {
  const {item} = markedDates;
  // console.log(item);
  let leagueId;
  if (item) {
    leagueId = item.id;
  }
  const {seasons} = useSelector(selectSeasons);
  const [seasonModel] = useSelector(selectSeasonsObjByLeagueId(leagueId));
  // const seasonId = leagueModel.seasonId;
  console.log('Seasons: ', seasons);
  const makeMarkedDates = () => {
    if (seasonModel) {
      console.log(format(new Date(seasonModel.start), 'yyyy-MM-dd'));
      const startDate = new Date(seasonModel.start);
      const endDate = new Date(seasonModel.end);
      const markedDates = {};
      // Iterate through each day between start and end dates
      let currentDate = startDate;
      while (currentDate <= endDate) {
        const formattedDate = format(currentDate, 'yyyy-MM-dd');
        markedDates[formattedDate] = {
          marked: true,
          color: '#7743DB',
        };

        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return markedDates;
    }

    return {};
  };

  const theme = {
    backgroundColor: '#FF7066',
    calendarBackground: 'transparent',
    textSectionTitleColor: '#FFF',
    selectedDayBackgroundColor: 'transparent',
    selectedDayTextColor: '#FFF',
    todayTextColor: '#FFF',
    todayBackgroundColor: '#FF7066',
    dayTextColor: 'gray',
    dotColor: '#FF7066',
    selectedDotColor: '#FFF',
    monthTextColor: '#FFF',
    textDayFontSize: 14,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 14,
  };
  return (
    <View style={styles.container}>
      <Calendar
        markingType={'period'}
        theme={theme}
        style={styles.calendar}
        markedDates={makeMarkedDates()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendar: {
    width: '100%',
    backgroundColor: 'transparent',
    aspectRatio: 1,
  },
});

export default LeagueCalendar;
