import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  cjs: 'rollup',
  externalsExclude: ['antd/lib/card', 'antd/es/card'],
  // externalsExclude: ['lodash', 'lodash/map'],
  extraRollupPlugins: [
    commonjs({
      include: /node_modules/,
      namedExports: {
        'node_modules/react-is/index.js': ['isFragment', 'isMemo', 'ForwardRef'],
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  // umd: {
  //   name: 'MyBundle',
  //   globals: {},
  // },
};
