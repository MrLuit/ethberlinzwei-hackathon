import common from './common';
import { smart } from 'webpack-merge';
import { Configuration } from 'webpack';

const configuration: Configuration = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'initial'
    },
    sideEffects: true
  }
};

export default smart(common, configuration);
