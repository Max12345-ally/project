import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { buildPlugins } from './config/build/buildPlugins';

const config: webpack.Configuration = {
        mode: "development",
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            filename: "[path].[contenthash].js",
            path: path.resolve(__dirname, 'build'),
            clean: true,
        },
        plugins: buildPlugins(),
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node-modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
    }

    export default config;




