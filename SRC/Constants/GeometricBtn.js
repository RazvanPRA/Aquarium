export const geometricBtn = [
  [
    {
      aquariumShape: 'Cube',
      imgSource: require('../Img/Menu/CubeSelected.png'),
      formulaImgSource: require('../Img/AQM/Cube.png'),
      dimensions: ['L', 'W', 'h'],
      equation: (functionDimensions, setShowError) => {
        const {L, W, h} = functionDimensions
        if (!!L && !!W && !!h) {
          const resultVolume = Number(L) * Number(W) * Number(h);
          setShowError(false);
          return resultVolume;
        } else {
          setShowError(true);
          return null;
        }
      },
    },

    {
      aquariumShape: 'Hexagon',
      imgSource: require('../Img/Menu/HexagonCubeSelected.png'),
      formulaImgSource: require('../Img/AQM/HexagonalCube.png'),
      dimensions: ['W', 'h'],
      equation: (functionDimensions, setShowError) => {
        const {W, h} = functionDimensions
        if (!!W && !!h) {
          const resultVolume =
            (3 / 2) *
            (Math.sqrt(3) *
              Number(W) ** 2 *
              Number(h));
          setShowError(false);
          return resultVolume;
        } else {
          setShowError(true);
          return null;
        }
      },
    },
  ],
  [
    {
      aquariumShape: 'Pentagon',
      imgSource: require('../Img/Menu/PentagonalCubeSelected.png'),
      formulaImgSource: require('../Img/AQM/PentagonalCube.png'),
      dimensions: ['L', 'h'],
      equation: (functionDimensions, setShowError) => {
        const {L, h} = functionDimensions
        if (!!L && !!h) {
          const resultVolume =
            (1 / 4) *
            Math.sqrt(5 + 2 * Math.sqrt(5)) *
            Number(L) ** 2 *
            Number(h);
          setShowError(false);
          return resultVolume;
        } else {
          setShowError(true);
          return null;
        }
      },
    },
    {
      aquariumShape: 'Corner',
      imgSource: require('../Img/Menu/TrigonalCubeSelected.png'),
      formulaImgSource: require('../Img/AQM/CornerCube.png'),
      dimensions: ['L', 'h'],
      equation: (functionDimensions, setShowError) => {
        const {L, h} = fu
        if (!!L && !!h) {
          const resultVolume =
            Math.PI *
            Number(L) ** 2 *
            (Number(h) / 4);
          setShowError(false);
          return resultVolume;
        } else {
          setShowError(true);
          return null;
        }
      },
    },
  ],
  [
    {
      aquariumShape: 'Bow Front Cube',
      imgSource: require('../Img/Menu/BowFrontCubeSelected.png'),
      formulaImgSource: require('../Img/AQM/BowFrontCube.png'),
      dimensions: ['L', 'W', 'Wm', 'h'],
      equation: (functionDimensions, setShowError) => {
        const {L, W, Wm, h} = functionDimensions
        if (
          !!L &&
          !!W &&
          !!Wm &&
          !!h
        ) {
          const beta = Math.tan(
            (0.5 * Number(L)) /
              (Number(Wm) - Number(W)),
          );
          const alfa = 2 * Math.PI - 4 * beta;
          const resultVolume =
            Number(h) *
              Number(W) *
              Number(L) +
            0.5 *
              Number(Wm) *
              (alfa - Math.sin(alfa)) *
              Number(W);
          setShowError(false);
          return resultVolume;
        } else {
          setShowError(true);
          return null;
        }
      },
    },
    {
      aquariumShape: 'Triangular Cube',
      imgSource: require('../Img/Menu/TriganolCube2Selected.png'),
      formulaImgSource: require('../Img/AQM/TrigonaCube.png'),
      dimensions: ['W', 'h'],
      equation: (functionDimensions, setShowError) => {
        const {W, h} = functionDimensions
        if (!!W && !!h) {
          const resultVolume =
            (Math.sqrt(3) / 4) *
            Number(W) ** 2 *
            Number(h);
          setShowError(false);
          return resultVolume; 
        } else {
          setShowError(true);
          return null;
        }
      },
    },
  ],
  [
    {
      aquariumShape: 'Cylinder',
      imgSource: require('../Img/Menu/CylinderSelected.png'),
      formulaImgSource: require('../Img/AQM/Cylinder.png'),
      dimensions: ['L', 'h'],
      equation: (functionDimensions, setShowError) => {
        const {L, h} = functionDimensions
        if (!!L && !!h) {
          const resultVolume =
            Math.PI *
            (Number(L) / 2) ** 2 *
            Number(h);
          setShowError(false);
          return resultVolume;
        } else {
          setShowError(true);
          return null;
        }
      },
    },
    {
      aquariumShape: 'Half Cylinder',
      imgSource: require('../Img/Menu/HalfCylinderSelected.png'),
      formulaImgSource: require('../Img/AQM/HalfCylinder.png'),
      dimensions: ['L', 'h'],
      equation: (functionDimensions, setShowError) => {
        const {L, h} = functionDimensions
        if (!!L && !!h) {
          const resultVolume =
            (Math.PI *
              (Number(L) / 2) ** 2 *
              Number(h)) /
            2;

          setShowError(false);
          return resultVolume;
        } else {
          setShowError(true);
          return null;
        }
      },
    },
  ],
];
