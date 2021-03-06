/**
 * Created by aajdinov on 1/20/2018.
 */

module.exports = {
    bsEndPointPath: "block_storages",

    listBlockStorages: function (callback) {
        req.is_get([this.bsEndPointPath], callback)
    },

    listBlockStoragesWithOptions: function (options, callback) {
        var path = this.bsEndPointPath;
        if (options) {
            path += "?";
            if (options.page) {
                path += "&page=" + options.page;
            }
            if (options.perPage) {
                path += "&per_page=" + options.perPage;
            }
            if (options.sort) {
                path += "&sort=" + options.sort;
            }
            if (options.query) {
                path += "&q=" + options.query;
            }
            if (options.fields) {
                path += "&fields=" + options.fields;
            }
        }

        req.is_get([path], callback)
    },

    createBlockStorage: function (json, callback) {
        req.is_post([this.bsEndPointPath], json, callback)
    },

    getBlockStorage: function (strg_id, callback) {
        req.is_get([this.bsEndPointPath, strg_id], callback)
    },

    updateBlockStorage: function (strg_id, json, callback) {
        req.is_put([this.bsEndPointPath, strg_id], json, callback)
    },

    deleteBlockStorage: function (strg_id, callback) {
        req.is_del([this.bsEndPointPath, strg_id], callback)
    },

    attachBlockStorage: function (strg_id, json, callback) {
        req.is_post([this.bsEndPointPath, strg_id, "server"], json, callback)
    },

    detachBlockStorage: function (strg_id, callback) {
        req.is_del([this.bsEndPointPath, strg_id, "server"], callback)
    },

}