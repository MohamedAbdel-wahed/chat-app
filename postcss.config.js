module.exports = {
    plugins: [
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      process.env.NODE_ENV=== 'production' && require('@fullhuman/postcss-purgecss')({
          content:[
              './src/**/*.vue',
              './src/views/Home.vue',
              './public/index.html'
          ],
          defaultExtractor: content=> content.match(/[A-za-z0-9-_:/]+/g) || []
      })
      // ...
    ]
  }