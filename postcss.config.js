module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
    }),
    require('postcss-utilities'),
    require('autoprefixer'),
  ],
}
