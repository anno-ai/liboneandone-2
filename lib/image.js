/**
 * Created by Ali on 8/6/2016.
 */
module.exports = {
    imageEndPointPath: "images",

    listImages: function (callback) {
        req.is_get([this.imageEndPointPath], callback)
    },

    listImagesWithOptions: function (options, callback) {
        var path = this.imageEndPointPath;
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
    createImage: function (json, callback) {
        req.is_post([this.imageEndPointPath], json, callback)
    },
    getImage: function (srv_id, callback) {
        req.is_get([this.imageEndPointPath, srv_id], callback)
    },
    updateImage: function (srv_id, json, callback) {
        req.is_put([this.imageEndPointPath, srv_id], json, callback)
    },
    deleteImage: function (srv_id, callback) {
        req.is_del([this.imageEndPointPath, srv_id], callback)
    },
}