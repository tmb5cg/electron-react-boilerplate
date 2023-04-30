/**
 * Base webpack config used across other specific configs
 */

import webpack from 'webpack';
import TsconfigPathsPlugins from 'tsconfig-paths-webpack-plugin';
import fs from 'fs';
import zlib from 'zlib';
import util from 'util';
import stream from 'stream';
import path from 'path';

import webpackPaths from './webpack.paths';
import { dependencies as externals } from '../../release/app/package.json';

const configuration: webpack.Configuration = {
  // externals: [...Object.keys(externals || {})],
  externals: [...Object.keys(externals || {})],

  stats: 'errors-only',

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // Remove this line to enable type checking in webpack builds
            transpileOnly: true,
            compilerOptions: {
              module: 'esnext',
            },
          },
        },
      },
    ],
  },

  output: {
    path: webpackPaths.srcPath,
    // https://github.com/webpack/webpack/issues/1114
    library: {
      type: 'commonjs2',
    },
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.mjs'],
    modules: [webpackPaths.srcPath, 'node_modules'],
    // There is no need to add aliases here, the paths in tsconfig get mirrored
    plugins: [new TsconfigPathsPlugins()],
    alias: {
      // ... other aliases
      // Add the following alias to resolve __dirname
      __dirname: path.resolve('./'),
    },
    fallback: {
      // fs: require.resolve('browserify-fs'),
      os: require.resolve('os-browserify/browser'),
      path: require.resolve('path-browserify'),
      assert: require.resolve('assert/'),
      // readline: require.resolve('readline-browserify'),
      // http: require.resolve('stream-http'),
      fs: false,
      url: false,
      https: require.resolve('https-browserify'),
      zlib: require.resolve('browserify-zlib'),
      // url: require.resolve('url/'),
      constants: require.resolve('constants-browserify'),
      http: require.resolve('stream-http'),
      net: false,
      tls: false,
      module: false,
      child_process: false,
      readline: false,
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
};

export default configuration;
