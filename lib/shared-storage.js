/**
 * Created by Ali on 8/7/2016.
 */

module.exports = {
    ssEndPointPath: "shared_storages",

    listSharedStorages: function (callback) {
        req.is_get([this.ssEndPointPath], callback)
    },

    listSharedStoragesWithOptions: function (options, callback) {
        var path = this.ssEndPointPath;
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

    createSharedStorage: function (json, callback) {
        req.is_post([this.ssEndPointPath], json, callback)
    },

    getSharedStorage: function (strg_id, callback) {
        req.is_get([this.ssEndPointPath, strg_id], callback)
    },

    updateSharedStorage: function (strg_id, json, callback) {
        req.is_put([this.ssEndPointPath, strg_id], json, callback)
    },

    deleteSharedStorage: function (strg_id, callback) {
        req.is_del([this.ssEndPointPath, strg_id], callback)
    },

    listSharedStorageServers: function (strg_id, callback) {
        req.is_get([this.ssEndPointPath, strg_id, "servers"], callback)
    },

    attachServerToSharedStorage: function (strg_id, json, callback) {
        req.is_post([this.ssEndPointPath, strg_id, "servers"], json, callback)
    },

    getSharedStorageServer: function (strg_id, srv_id, callback) {
        req.is_get([this.ssEndPointPath, strg_id, "servers", srv_id], callback)
    },

    detachServerFromSharedStorage: function (strg_id, srv_id, json, callback) {
        req.is_del([this.ssEndPointPath, strg_id, "servers", srv_id], json, callback)
    },

    getAccessCredentials: function (callback) {
        req.is_get([this.ssEndPointPath, "access"], callback)
    },

    changePassword: function (json, callback) {
        req.is_put([this.ssEndPointPath, "access"], json, callback)
    },


}