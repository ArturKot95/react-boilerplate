import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html"
});

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlPlugin],
  devtool: "source-map"
}
