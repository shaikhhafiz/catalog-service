class BodyParser {
    static parseBody = (app) => {
        const bodyParser = require('body-parser');

        app.use(bodyParser.urlencoded());
        app.use(bodyParser.json());
    }
}

module.exports = BodyParser