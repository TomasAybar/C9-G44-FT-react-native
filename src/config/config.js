module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    PORT: process.env.PORT || 8000,
    DB: {
        URI: process.env.MONGODB_URI,
        USESR: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD,
    }
}