module.exports = { 
  extends: "standard",
  globals: {
    Vue: 'writable',
    Dexie: 'writable',
    Database: 'writable'
  },
  plugins: [
    "cypress"
  ],
  rules: {
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn"
  },
  env: {
    "cypress/globals": true
  }
};