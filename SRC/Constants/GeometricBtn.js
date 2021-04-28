export const geometricBtn = [
  [
    {
      aquariumShape: 'Cube',
      imgSource: require('../Img/Menu/CubeSelected.png'),
      handleCalculate: ({height, lenght, width}) => {
        console.warn('Razvan');
        console.warn({height, lenght, width});
      },
    },

    {
      aquariumShape: 'Hexagon',
      imgSource: require('../Img/Menu/HexagonCubeSelected.png'),
    },
  ],
  [
    {
      aquariumShape: 'Pentagon',
      imgSource: require('../Img/Menu/PentagonalCubeSelected.png'),
    },
    {
      aquariumShape: 'Corner',
      imgSource: require('../Img/Menu/TrigonalCubeSelected.png'),
    },
  ],
  [
    {
      aquariumShape: 'Bow Front Cube',
      imgSource: require('../Img/Menu/BowFrontCubeSelected.png'),
    },
    {
      aquariumShape: 'Trigona',
      imgSource: require('../Img/Menu/TriganolCube2Selected.png'),
    },
  ],
  [
    {
      aquariumShape: 'Cylinder',
      imgSource: require('../Img/Menu/CylinderSelected.png'),
    },
    {
      aquariumShape: 'Half Cylinder',
      imgSource: require('../Img/Menu/HalfCylinderSelected.png'),
    },
  ],
];
