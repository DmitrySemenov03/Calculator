module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: 'D:/Programming/FrontEnd/intern-practise/dist',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
