function DayConvert(time) {
  if (time > 6 && time <= 11) {
    return "Morning";
  } else if (time > 11 && time <= 15) {
    return "Midday";
  } else if (time > 15 && time <= 18) {
    return "Afternoon";
  } else if (time > 18 && time <= 23) {
    return "Night";
  } else {
    return "Overnight";
  }
}

export default DayConvert;
