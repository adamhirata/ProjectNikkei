import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
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

export default function CalComponent({ eventObj }) {
  const data = eventObj;
  const [date, setDate] = useState();
  const [agenda, setAgenda] = useState(
    <Agenda items={data} selected={dateFunc} hideKnob={true} />
  );

  const dateFunc = () => {
    if (date == undefined) {
      return new Date();
    } else {
      return new Date(date);
    }
  };

  const refreshAgenda = () => {
    if (date == undefined) {
      return;
    }
    return <EventList date={date} data={data} />;
  };

  useEffect(() => {
    setAgenda(refreshAgenda);
  }, [date]);

  return (
    <View>
      <Calendar
        markedDates={data}
        markingType={"multi-period"}
        onDayPress={(day) => {
          setDate(day.dateString);
        }}
        hideArrows={false}
        style={styles.calendar}
      />
      {agenda}
    </View>
  );
}

const Event = (data) => {
  let timeFrame;
  if (data.data.allDay) {
    timeFrame = "All Day";
  } else {
    timeFrame = data.data.startTime + " - " + data.data.endTime;
  }
  return (
    <View style={{ padding: 10 }}>
      <TouchableOpacity>
        <Text>{data.data.name}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 50,
              backgroundColor: data.data.color,
              marginRight: 7,
            }}
          ></View>
          <Text>{data.data.sub}</Text>
        </View>
        <Text>{timeFrame}</Text>
      </TouchableOpacity>
    </View>
  );
};

const EventList = (date) => {
  const dateObj = new Date(date.date + " 00:00");
  let weekday;
  switch (dateObj.getDay()) {
    case 0:
      weekday = "Sun";
      break;
    case 1:
      weekday = "Mon";
      break;
    case 2:
      weekday = "Tue";
      break;
    case 3:
      weekday = "Wed";
      break;
    case 4:
      weekday = "Thu";
      break;
    case 5:
      weekday = "Fri";
      break;
    case 6:
      weekday = "Sat";
      break;
  }

  let events;
  if (date.data[date.date] == undefined) {
    events = (
      <View
        style={{ alignItems: "center", justifyContent: "center", padding: 10 }}
      >
        <Text>No events today</Text>
      </View>
    );
  } else {
    events = date.data[date.date].events.map((info) => <Event data={info} />);
  }

  return (
    <View style={styles.eventList}>
      <View
        style={{
          width: 60,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 20 }}>{dateObj.getDate()}</Text>
        <Text>{weekday}</Text>
      </View>
      <View
        style={{
          paddingTop: 4,
          paddingBottom: 2,
          height: "100%",
          borderWidth: 1,
          borderColor: "lightgray",
        }}
      ></View>
      <View style={{ width: "100%" }}>{events}</View>
    </View>
  );
};

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
    borderRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 4.0,
    overflow: "visible",
  },
  eventList: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 40,
    marginBottom: 40,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 4.0,
    overflow: "visible",
  },
});
