export const geometricBtn = [
  [
    {
      aquariumShape: 'Cube',
      imgSource: require('../Img/Menu/CubeSelected.png'),
      formulaImgSource: require('../Img/AQM/Cube.png'),
      dimensions: ['L', 'W', 'h'],
      equation: (functionDimensions) => {
        const resultVolume =
          Number(functionDimensions.L) *
          Number(functionDimensions.W) *
          Number(functionDimensions.h);
        return resultVolume;
      },
    },

    {
      aquariumShape: 'Hexagon',
      imgSource: require('../Img/Menu/HexagonCubeSelected.png'),
      formulaImgSource: require('../Img/AQM/HexagonalCube.png'),
      dimensions: ['P', 'h'],
      equation: (functionDimensions) => {
        const resultVolume =
          (3 / 2) *
          (Math.sqrt(3) *
            Number(functionDimensions.P) ** 2 *
            Number(functionDimensions.h));
        return resultVolume;
      },
    },
  ],
  [
    {
      aquariumShape: 'Pentagon',
      imgSource: require('../Img/Menu/PentagonalCubeSelected.png'),
      formulaImgSource: require('../Img/AQM/PentagonalCube.png'),
      dimensions: ['L', 'h'],
      equation: (functionDimensions) => {
        const resultVolume =
          (1 / 4) *
          Math.sqrt(5 + 2 * Math.sqrt(5)) *
          Number(functionDimensions.L) ** 2 *
          Number(functionDimensions.h);
        return resultVolume;
      },
    },
    {
      aquariumShape: 'Corner',
      imgSource: require('../Img/Menu/TrigonalCubeSelected.png'),
      formulaImgSource: require('../Img/AQM/CornerCube.png'),
      dimensions: ['L', 'h'],
      equation: (functionDimensions) => {
        const resultVolume =
          Math.PI *
          Number(functionDimensions.L) ** 2 *
          (Number(functionDimensions.h) / 4);
        return resultVolume;
      },
    },
  ],
  [
    {
      aquariumShape: 'Bow Front Cube',
      imgSource: require('../Img/Menu/BowFrontCubeSelected.png'),
      formulaImgSource: require('../Img/AQM/BowFrontCube.png'),
      dimensions: ['L', 'W', 'Wm', 'h'],
      equation: (functionDimensions) => {
        const beta = Math.tan(
          (0.5 * Number(functionDimensions.L)) /
            (Number(functionDimensions.Wm) - Number(functionDimensions.W)),
        );
        const alfa = 2 * Math.PI - 4 * beta;
        const resultVolume =
          Number(functionDimensions.h) *
            Number(functionDimensions.W) *
            Number(functionDimensions.L) +
          0.5 *
            Number(functionDimensions.Wm) *
            (alfa - Math.sin(alfa)) *
            Number(functionDimensions.W);
        return resultVolume;
      },
    },
    {
      aquariumShape: 'Triangular Cube',
      imgSource: require('../Img/Menu/TriganolCube2Selected.png'),
      formulaImgSource: require('../Img/AQM/TrigonaCube.png'),
      dimensions: ['W', 'h'],
      equation: (functionDimensions) => {
        const resultVolume =
          (Math.sqrt(3) / 4) *
          Number(functionDimensions.W) ** 2 *
          Number(functionDimensions.h);
        return resultVolume;
      },
    },
  ],
  [
    {
      aquariumShape: 'Cylinder',
      imgSource: require('../Img/Menu/CylinderSelected.png'),
      formulaImgSource: require('../Img/AQM/Cylinder.png'),
      dimensions: ['L', 'h'],
      equation: (functionDimensions) => {
        const resultVolume =
          Math.PI *
          (Number(functionDimensions.L) / 2) ** 2 *
          Number(functionDimensions.h);
        return resultVolume;
      },
    },
    {
      aquariumShape: 'Half Cylinder',
      imgSource: require('../Img/Menu/HalfCylinderSelected.png'),
      formulaImgSource: require('../Img/AQM/HalfCylinder.png'),
      dimensions: ['L', 'h'],
      equation: (functionDimensions) => {
        const resultVolume =
          (Math.PI *
            (Number(functionDimensions.L) / 2) ** 2 *
            Number(functionDimensions.h)) /
          2;
        return resultVolume;
      },
    },
  ],
];
