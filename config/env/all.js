// default app configuration
module.exports = {
    port: process.env.PORT || 4000,
    db:  process.env.MONGOLAB_URI || process.env.MONGODB_URI || "mongodb://hackmeplease:xxx@ds159217.mlab.com:59217/hackmeplease",
    cookieSecret: "session_cookie_secret_key_here",
    cryptoKey: "a_secure_key_for_crypto_here",
    cryptoAlgo: "aes256",
    hostName: "localhost"
};
