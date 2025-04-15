import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

/11111


export function buildPlugins(): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ]
}