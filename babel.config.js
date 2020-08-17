// {
//   "presets"[
//     [
//       "@babel/env",
//       {
//         "targets": {
//           "edge": "17",
//           "firefox": "60",
//           "chrome": "67",
//           "safari": "11.1",
//           'ie': '11'
//         },
//         "useBuiltIns": "usage",
//         "corejs": "3.6.4",
//       }
//     ]
//   ],
//     "plugins": [
//       ["transform-class-properties", { "spec": true }]
//     ]
// }

const presets = [
  ['@babel/env', {
    targets: {
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },
    useBuiltIns: "entry",
    corejs: "3.6.4",
  }]
];

const plugins = [
  ["transform-class-properties", { "spec": true }]
]
module.exports = { presets, plugins };