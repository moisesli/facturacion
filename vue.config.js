const configureAPI = require('./src/api/midelware')

module.exports = {
    devServer: {
        before: configureAPI
    }
}