'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseapiservice = require('./baseapiservice');

var _baseapiservice2 = _interopRequireDefault(_baseapiservice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = function () {
    function UserService() {
        _classCallCheck(this, UserService);

        this.baseApiService = new _baseapiservice2.default();
    }

    _createClass(UserService, [{
        key: 'getAllUser',
        value: function getAllUser(config, url) {
            console.log(config);
            var query = '';
            var isAnyFilter = false;
            if (config.search !== '' && config.search !== null) {
                isAnyFilter = true;
                query += 'SearchString=' + encodeURIComponent(config.search) + '&';
            }
            if (config.types !== '' && config.types !== null) {
                isAnyFilter = true;
                query += 'UserType=' + config.types + '&';
            }
            if (config.isActive !== null) {
                isAnyFilter = true;
                query += 'IsActive=' + config.isActive + '&';
            }
            if (config.roles !== '' && config.roles !== null) {
                isAnyFilter = true;
                query += 'Roles=' + config.roles + '&';
            }
            if (config.sort !== '' && config.sort !== null) {
                isAnyFilter = true;
                query += 'SortCriteria=' + encodeURIComponent(config.sort) + '&';
            }
            if (isAnyFilter) {
                query = '&' + query;
            }
            query = query.slice(0, -1);
            console.log(query);
            return this.baseApiService.get(url + 'users?PageSize=' + config.pagesize + '&PageIndex=' + config.pageindex + query, "", true);
        }
    }, {
        key: 'getInviteUsers',
        value: function getInviteUsers(config, url) {
            console.log(config);
            var query = '';
            var isAnyFilter = false;
            if (config.search !== '' && config.search !== null) {
                isAnyFilter = true;
                query += 'SearchString=' + encodeURIComponent(config.search) + '&';
            }
            if (config.types !== '' && config.types !== null) {
                isAnyFilter = true;
                query += 'UserType=' + config.types + '&';
            }
            if (config.roles !== '' && config.roles !== null) {
                isAnyFilter = true;
                query += 'Roles=' + config.roles + '&';
            }
            if (config.sort !== '' && config.sort !== null) {
                isAnyFilter = true;
                query += 'SortCriteria=' + encodeURIComponent(config.sort) + '&';
            }
            if (isAnyFilter) {
                query = '&' + query;
            }
            query = query.slice(0, -1);

            return this.baseApiService.get(url + 'users/invite?PageSize=' + config.pagesize + '&PageIndex=' + config.pageindex + query, "", true);
        }
    }, {
        key: 'getUsersMasterRoles',
        value: function getUsersMasterRoles(url) {
            return this.baseApiService.get(url + 'access/apps', "", false);
        }
    }]);

    return UserService;
}();

exports.default = UserService;