import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar, Agenda, LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["en"] = {
  monthNames: [
    "January ( 1月 )",
    "February ( 2月 )",
    "March ( 3月 )",
    "April ( 4月 )",
    "May ( 5月 )",
    "June ( 6月 )",
    "July ( 7月 )",
    "August ( 8月 )",
    "September ( 9月 )",
    "October ( 10月 )",
    "November ( 11月 )",
    "December ( 12月 )",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  today: "Today",
};
LocaleConfig.defaultLocale = "en";

export default function CalComponent() {
  const nsu = { key: "nsu", color: "red" };
  const inc = { key: "inc", color: "blue" };
  const oof = "oof";
  const [date, setDate] = useState();
  const [data, setData] = useState({
    "2021-03-20": {
      periods: [
        { startingDay: true, endingDay: false, color: nsu.color },
        { startingDay: true, endingDay: true, color: inc.color },
      ],
    },
    "2021-03-21": {
      periods: [{ startingDay: false, endingDay: false, color: nsu.color }],
    },
    "2021-03-22": {
      periods: [{ startingDay: false, endingDay: false, color: nsu.color }],
    },
    "2021-03-23": {
      periods: [{ startingDay: false, endingDay: false, color: nsu.color }],
    },
    "2021-03-24": {
      periods: [{ startingDay: false, endingDay: false, color: nsu.color }],
    },
    "2021-03-25": {
      periods: [{ startingDay: false, endingDay: false, color: nsu.color }],
    },
    "2021-03-26": {
      periods: [{ startingDay: false, endingDay: true, color: nsu.color }],
    },
    "2021-03-27": {
      periods: [{ startingDay: true, endingDay: false, color: nsu.color }],
    },

    "2021-03-28": {
      periods: [{ startingDay: false, endingDay: true, color: nsu.color }],
    },
  });

  return (
    <View>
      <Calendar
        markedDates={data}
        markingType={"multi-period"}
        onDayPress={(day) => {
          console.log(
            new Date(day.dateString.replace("-", "/").replace("-", "/"))
          );
          setDate(new Date(day.dateString.replace("-", "/").replace("-", "/")));
          console.log(date);
        }}
        hideArrows={false}
        style={styles.calendar}
      />
      <Text>{date}</Text>
      {oof}
      <Agenda
        items={data}
        selected={new Date()}
        hideKnob={true}
        renderItem={(item) => {
          <TouchableOpacity>
            <Text>oof</Text>
          </TouchableOpacity>;
        }}
        renderEmptyDate={() => {
          return <View />;
        }}
        renderEmptyData={() => {
          return <View />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  calendar: {
    marginTop: 25,
    minWidth: 700,
    paddingBottom: 50,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 4.0,
    overflow: "visible",
  },
});
