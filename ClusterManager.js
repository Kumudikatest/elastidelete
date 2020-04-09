module.exports = function() {
    this.clusters = [];

    this.clusters["k2"] = {
        host: process.env.EndPoint_redisK2,
        port: 6379,
        clusterModeEnabled: false
    };
};