/**
 * Created by Ali on 8/17/2016.
 */
module.exports = {
    roleEndPointPath: "roles",

    listRoles: function (callback) {
        req.is_get([this.roleEndPointPath], callback)
    },

    listRolesWithOptions: function (options, callback) {
        var path = this.roleEndPointPath;
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
    createRole: function (json, callback) {
        req.is_post([this.roleEndPointPath], json, callback)
    },
    getRole: function (role_id, callback) {
        req.is_get([this.roleEndPointPath, role_id], callback)
    },
    updateRole: function (role_id, json, callback) {
        req.is_put([this.roleEndPointPath, role_id], json, callback)
    },
    deleteRole: function (role_id, callback) {
        req.is_del([this.roleEndPointPath, role_id], callback)
    },
    getRolePermissions: function (role_id, callback) {
        req.is_get([this.roleEndPointPath, role_id, "permissions"], callback)
    },
    updateRolePermissions: function (role_id, json, callback) {
        req.is_put([this.roleEndPointPath, role_id, "permissions"], json, callback)
    },

    listRoleUsers: function (role_id, callback) {
        req.is_get([this.roleEndPointPath, role_id, "users"], callback)
    },
    addUsersToRole: function (role_id, json, callback) {
        req.is_post([this.roleEndPointPath, role_id, "users"], json, callback)
    },

    getRoleUser: function (role_id, usr_id, callback) {
        req.is_get([this.roleEndPointPath, role_id, "users", usr_id], callback)
    },
    removeRoleFromUser: function (role_id, usr_id, callback) {
        req.is_del([this.roleEndPointPath, role_id, "users", usr_id], callback)
    },
    cloneRole: function (role_id, json, callback) {
        req.is_post([this.roleEndPointPath, role_id, "clone"], json, callback)
    },
}