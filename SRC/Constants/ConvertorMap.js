const convertorMap = [
  {
    units: [
      {shortUnit: 'mm', longUnit: 'Milimeter'},
      {shortUnit: 'cm', longUnit: 'Centimeter'},
      {shortUnit: 'dm', longUnit: 'Decimetre'},
      {shortUnit: 'inch', longUnit: 'Inch'},
      {shortUnit: 'feet', longUnit: 'Feet'},
    ],
    milimeterToMeter: (mm) => {
      if (!!mm) {
        const resultConverter = mm / 1000;
        return resultConverter;
      }
    },
    centemeterToMeter: (cm) => {
      const resultConverter = cm / 100;
      return resultConverter;
    },
    decimetreToMeter: (dm) => {
      const resultConverter = dm / 10;
      return resultConverter;
    },
    inchToMeter: () => {
      const resultConverter = inch / 39.37;
      return resultConverter;
    },
    feetToMeter: () => {
      const resultConverter = feet / 3.28084;
      return resultConverter;
    },
    meterToMilimeter: () => {
      const resultConverter = m * 1000;
      return resultConverter;
    },
    meterToCentemeter: () => {
      const resultConverter = m * 100;
      return resultConverter;
    },
    meterToDecimetre: () => {
      const resultConverter = m * 10;
      return resultConverter;
    },
    meterToInch: () => {
      const resultConverter = m * 39.37;
      return resultConverter;
    },
    meterToFeet: () => {
      const resultConverter = m * 3.28084;
      return resultConverter;
    },
  },
  {
    units: [
      {shortUnit: '\u00B0C', longUnit: '\u00B0Celsius'},
      {shortUnit: '\u00B0F', longUnit: '\u00B0Fahrenheit'},
    ],
    centemeterToMeter: () => {},
    meterToCentemeter: () => {},
  },
  {
    units: [
      {shortUnit: 'L', longUnit: 'Liter'},
      {shortUnit: 'G', longUnit: 'Gallon'},
    ],
    centemeterToMeter: () => {},
    inchToMeter: () => {},
    meterToCentemeter: () => {},
  },
];

export default convertorMap;
