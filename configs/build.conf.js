module.exports = {
  distDir: 'dist/',
  serverPort: 9000,

  assets: {
    images: [
      'src/assets/img/**/*'
    ]
  },

  app: {
    scripts: [
      'src/app/**/*.js',
      '!src/app/**/*.test.js'
    ],
    styles: [
      'src/app/**/*.scss'
    ],
    tests: [
      'src/app/**/*.test.js'
    ],
    views: [
      'src/app/**/*.tpl.html'
    ]
  },

  base: {
    scripts: [
      'vendor/angular/angular.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-ui-utils/modules/route/route.js',
      'vendor/angular-sanitize/angular-sanitize.js',
      'vendor/angular-animate/angular-animate.js'
    ],
    styles: [
      'src/common/base/*.scss'
    ],
    views: [
      'src/index.html'
    ],
    tests: [
      'vendor/angular/angular.js',
      'vendor/angular-mocks/angular-mocks.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-sanitize/angular-sanitize.js',
      'vendor/angular-animate/angular-animate.js'
    ]
  },

  common: {
    scripts: [
      'src/common/**/*.js',
      '!src/common/**/*.test.js'
    ],
    styles: [
      'src/common/**/*.scss',
      '!src/common/base/*.scss'
    ],
    tests: [
      'src/common/**/*.test.js'
    ],
    views: [
      'src/common/**/*.html'
    ]
  },

  vendor: {
    scripts: ['']
  }
};
