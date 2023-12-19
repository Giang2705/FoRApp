require('dotenv').config()
module.exports = {
    env: {
        CHAT_BOT_API : process.env.CHAT_BOT_API,
        MONGO_URL : process.env.MONGO_URL,
        PORT_URL : process.env.PORT_URL,
        JWT_SECRET : process.env.JWT_SECRET
    },
    project: {
        ios: {},
        android: {}
    },
    assets: ['./assets/'],
};