export const feachers = [
  {
    id: 1,
    title: 'New special tool',
    text: 'Define your custimised special tool step by step',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/newTool.png',
    link: '/new-special-tool',
    active: true,
  },
  {
    id: 2,
    title: 'Tool from history',
    text: 'Recover the details for your special tool from a previous enquiry',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/existingTool.png',
    link: '',
    active: false,
  },
]

export const products = [
  {
    id: 1,
    feacher: 1,
    title: 'Tool',
    text: 'Lorem Ipsum dolo sit amet',
    link: '/new-special-tool/tool',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/tool.jpg',
    active: true,
  },
  {
    id: 2,
    feachers: 1,
    title: 'Indexable insert',
    text: 'Lorem Ipsum dolo sit amet',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/indexableinserts.png',
    link: '',
    active: false,
  }
]

export const types = [
  {
    id: 1,
    product: 1,
    title: 'Drilling',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/DrillingTools.png',
  },
  {
    id: 2,
    product: 1,
    title: 'Milling',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/MillingTools.jpg',
  },
  {
    id: 3,
    product: 1,
    title: 'Turning',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/GroovingTools.jpg',
  },
  {
    id: 4,
    product: 1,
    title: 'Threading',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/ThreadingTools.jpg',
  },
]

export const tools = [
  {
    id: 1,
    type: 1,
    title: 'Solid carbide drill',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/SolidDrill.png',
  },
  {
    id: 2,
    type: 1,
    title: 'Indexable insert drill',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/InsertDrill.png',
  },
  {
    id: 3,
    type: 2,
    title: 'Solid carbide mill',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/SolidMill.png',
  },
  {
    id: 4,
    type: 2,
    title: 'Indexable insert mill',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/InsertMill.png',
  },
  {
    id: 5,
    type: 3,
    title: 'Grooving tool',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/GroovingTool_Product_Default.jpg',
  },
  {
    id: 6,
    type: 4,
    title: 'Tap',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/TappingTool_Product_Default.png',
  },
  {
    id: 7,
    type: 4,
    title: 'Thread former',
    image: 'https://raw.githubusercontent.com/DanielSorokowski/test_task-xpress-online/main/src/img/ThreadFormer_Product_Default.png',
  },
]

export const formGroups = [
  {
    id: 1,
    title: 'Tool Specifications',
    elements: [
      {
        id: 1,
        title: 'Drill Dimeter: (in millimeters)',
      },
      {
        id: 2,
        title: 'Overall Length (in millimeters)',
      },
      {
        id: 3,
        title: 'Flute Length (in millimeters)',
      },
      {
        id: 4,
        title: 'Shank Diameter (in millimeters)',
      },
      {
        id: 5,
        title: 'Helix Angle (in degrees)',
      },
      {
        id: 6,
        title: 'Point Angle (in degrees)',
      }
    ]
  },
  {
    id: 2,
    title: 'Material Information',
    elements: [
      {
        id: 1,
        title: 'Worpiece Material:',
      },
      {
        id: 2,
        title: 'Workpiece Hardness:',
      },
    ]
  }
]