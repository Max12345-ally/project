import { BuildOptions } from "./types/config";
import path from "path";
import webpack from "webpack";
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';

export  function  buildWebpackConfig(options: BuildOptions): webpack.Configuration  {
    return  {
        mode: "development",
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            filename: "[name].[contenthash].js ",
            path: path.resolve(__dirname, 'build'),
            clean: true,
        },
      
        plugins: buildPlugins(),
      
        module: {
            rules: buildLoaders()
          },
          resolve: buildResolvers()
      }

}