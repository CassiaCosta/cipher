const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');

function getComponentEntries() {
    const entries = { main: './src/main.ts' };
    const files = glob.sync('./src/components/**/*.ts');

    files.forEach(file => {
        const name = path.basename(file, '.ts');
        const componentPath = file.replace('./src/', '').replace('.ts', '');

        entries[name] = path.resolve(__dirname, file);
    });
    return entries;
}

module.exports = {
    entry: getComponentEntries(),
    output: {
        filename: (pathData) => {
            return pathData.chunk.name === 'main' ? '[name].js' : 'components/[name]/[name].js';
        },
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: (pathData) => {
                return pathData.chunk.name === 'main' ? 'output.css' : 'components/[name]/[name].css';
            },
        }),
    ],
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    mode: 'development',
};