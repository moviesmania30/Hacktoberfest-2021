const FAHRENHEIT_ACRONYM = "F";
const FAHRENHEIT = "fahrenheit";

const CELCIUS_ACRONYM = "C";
const CELCIUS = "celcius";

const KELVIN_ACRONYM = "K";
const KELVIN = "kelvin";

const TEMPERATURES = [
  FAHRENHEIT_ACRONYM,
  FAHRENHEIT,
  CELCIUS_ACRONYM,
  CELCIUS,
  KELVIN_ACRONYM,
  KELVIN,
];

function temperatureConverter(measurement, degree) {
  if (typeof degree !== "number") {
    throw Error("Input must be a number");
  }

  if (!TEMPERATURES.includes(measurement)) {
    throw Error("Measurement must be " + TEMPERATURES.join(","));
  }

  if ([FAHRENHEIT_ACRONYM, FAHRENHEIT].includes(measurement)) {
    // fahrenheit to other measurements
    return {
      celcius: (degree - 32) / 1.8,
      kelvin: (degree - 32) / 1.8 + 273.15,
    };
  } else if ([CELCIUS_ACRONYM, CELCIUS].includes(measurement)) {
    // celcius to other measurements
    return {
      fahrenheit: degree * 1.8 + 32,
      kelvin: degree + 273.15,
    };
  } else {
    // kelvin to other measurements
    return {
      celcius: degree - 273.15,
      fahrenheit: (degree - 273.15) * 1.8 + 32,
    };
  }
}
