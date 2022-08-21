function temperatureConverter(valNum) {
  const res = valNum - 273.15;
  return parseFloat(res).toString().split("").slice(0, 4).join("");
}

export default temperatureConverter;
