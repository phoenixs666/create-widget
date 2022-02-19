import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  cjs: 'rollup',
  externalsExclude: [],
  extraRollupPlugins: [
    commonjs({
      include: /node_modules/,
      namedExports: {
        'node_modules/react-is/index.js': ['isFragment', 'isMemo', 'ForwardRef'],
        'node_modules/react-dom/index.js': ['findDOMNode', 'render', 'unmountComponentAtNode'],
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
