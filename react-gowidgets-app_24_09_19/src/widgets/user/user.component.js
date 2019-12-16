'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _user = require('./user.view');

var _user2 = _interopRequireDefault(_user);

var _userservice = require('../service/userservice');

var _userservice2 = _interopRequireDefault(_userservice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserComponent = function (_React$Component) {
    _inherits(UserComponent, _React$Component);

    function UserComponent(props) {
        _classCallCheck(this, UserComponent);

        var _this = _possibleConstructorReturn(this, (UserComponent.__proto__ || Object.getPrototypeOf(UserComponent)).call(this, props));

        _this.SearchUser = function (data) {
            _this.state.Search = data;
            _this.setState({ "Search": _this.state.Search });
            _this.setState({ "Page": 1 });
            _this.loadUsers(_this.state.Page);
        };

        _this.FilterUser = function (data) {
            var ids = [];
            data.forEach(function (x) {
                ids.push(x.id);
            });
            _this.state.Roles = ids;
            _this.setState({ "Roles": _this.state.Roles });
            _this.setState({ "Page": 1 });
            _this.loadUsers(_this.state.Page);
        };

        _this.Sortuser = function (sortColumn) {
            alert(sortColumn);
            // this.setState({ "Sort": data });
            // this.setState({ "Page": 1 });
            // this.loadUsers(this.state.Page);
        };

        _this.ChangeTab = function (tabName) {
            switch (tabName) {
                case 'Active':
                    _this.tabs = [{ "Name": 'Active', "IsActive": true }, { "Name": 'Invite', "IsActive": false }];
                    _this.state.Sort = "IsApproved:Asc,DisplayName:Asc";
                    _this.setState({ "Page": 1, "IsActive": false, "Sort": _this.state.Sort });
                    _this.loadUsers(_this.state.Page);
                    break;
                case 'Invited':
                    alert();
                    _this.tabs = [{ "Name": 'Active', "IsActive": false }, { "Name": 'Invite', "IsActive": true }];
                    _this.state.Sort = "EmailId:Asc";
                    _this.setState({ "Page": 1, "IsActive": false, "Sort": _this.state.Sort });
                    _this.loadInviteUsers(_this.state.Page);
                    break;
                default:
                    break;
            }
        };

        _this.userService = new _userservice2.default();
        _this.state = {
            Header: [],
            Body: [],
            Search: '',
            IsActive: true,
            Roles: '',
            PageSize: 50,
            Page: 1,
            Sort: 'IsApproved:Asc,DisplayName:Asc',
            IsCheckbox: true,
            RolesData: []
        };
        _this.loadRoles();
        _this.loadUsers(_this.state.Page);
        _this.tabs = [{ "Name": 'Active', "IsActive": true }, { "Name": 'Invited', "IsActive": false }];
        return _this;
    }

    _createClass(UserComponent, [{
        key: 'loadRoles',
        value: function loadRoles() {
            var _this2 = this;

            this.userService.getUsersMasterRoles('https://azeuw-apimhivet01.azure-api.net/api/hiveadmin/v1/').then(function (data) {
                var userData = data.packet.body;
                var roleData = [];
                userData.forEach(function (x) {
                    if (x.name === 'Go! Manage') {
                        x.modules.forEach(function (y) {
                            y.roles.forEach(function (z) {
                                roleData.push({ "id": z.id, "name": z.name });
                            });
                        });
                    }
                });
                _this2.setState({ "RolesData": roleData });
            });
        }
    }, {
        key: 'loadUsers',
        value: function loadUsers(page) {
            var _this3 = this;

            var config = {
                pagesize: this.state.PageSize,
                pageindex: page,
                types: '',
                roles: this.state.Roles,
                search: this.state.Search,
                sort: this.state.Sort,
                isActive: this.state.IsActive
            };
            this.userService.getAllUser(config, 'https://azeuw-apimhivet01.azure-api.net/api/hiveadmin/v1/').then(function (data) {
                var userData = data.packet.body.result.users;
                var header = _this3.prepareActiveHeader();
                _this3.setState({ "Header": header });
                var body = _this3.prepreActiveBody(userData);
                _this3.setState({ "Body": body });
            });
        }
    }, {
        key: 'loadInviteUsers',
        value: function loadInviteUsers(page) {
            var _this4 = this;

            var config = {
                pagesize: this.state.PageSize,
                pageindex: page,
                types: '',
                roles: this.state.Roles,
                search: this.state.Search,
                sort: this.state.Sort,
                isActive: this.state.IsActive
            };
            this.userService.getInviteUsers(config, 'https://azeuw-apimhivet01.azure-api.net/api/hiveadmin/v1/').then(function (data) {
                var userData = data.packet.body.result.users;
                var header = _this4.prepareInviteHeader();
                _this4.setState({ "Header": header });
                var body = _this4.prepareInviteBody(userData);
                _this4.setState({ "Body": body });
            });
        }
    }, {
        key: 'prepareActiveHeader',
        value: function prepareActiveHeader() {
            // Prepare Head
            var lstHead = [];
            lstHead.push({ "Name": "Name", "IsDefault": true, "IsSort": true });
            lstHead.push({ "Name": "Email", "IsDefault": false, "IsSort": true });
            lstHead.push({ "Name": "Phone", "IsDefault": false, "IsSort": true });
            lstHead.push({ "Name": "Manage role", "IsDefault": false, "IsSort": true });
            lstHead.push({ "Name": "Action", "IsDefault": false, "IsSort": false });
            return lstHead;
        }
    }, {
        key: 'prepreActiveBody',
        value: function prepreActiveBody(userData) {
            var _this5 = this;

            var lstBody = [];
            userData.forEach(function (e) {
                lstBody.push({ "body": [{ "Text": e.displayName, "Type": "CheckBox" }, { "Text": e.displayName, "Type": "Label" }, { "Text": e.alternateEmailId, "Type": "Email" }, { "Text": e.telephonenumber, "Type": "Telephone" }, { "Text": _this5.prepeareUserView(e.modules), "Type": "Link" }, { "Text": "deleteIcon", "Type": "Icon" }] });
            });
            return lstBody;
        }
    }, {
        key: 'prepareInviteHeader',
        value: function prepareInviteHeader() {
            // Prepare Head
            var lstHead = [];
            lstHead.push({ "Name": "Email", "IsDefault": true, "IsSort": true });
            lstHead.push({ "Name": "Manage role", "IsDefault": false, "IsSort": true });
            lstHead.push({ "Name": "Action", "IsDefault": false, "IsSort": false });
            return lstHead;
        }
    }, {
        key: 'prepareInviteBody',
        value: function prepareInviteBody(userData) {
            var _this6 = this;

            var lstBody = [];
            userData.forEach(function (e) {
                lstBody.push({ "body": [{ "Text": e.emailId, "Type": "CheckBox" }, { "Text": e.emailId, "Type": "Email" }, { "Text": _this6.prepeareUserView(e.modules), "Type": "Link" }, { "Text": "reloadIcon", "Type": "Icon" }, { "Text": "revokeIcon", "Type": "Icon" }] });
            });
            return lstBody;
        }
    }, {
        key: 'prepeareUserView',
        value: function prepeareUserView(modules) {
            var userViewString = '';
            if (modules.length > 0) {
                modules.forEach(function (x) {
                    if (x.name === 'Go! Manage Clever' && x.roles.length > 0) {
                        x.roles.forEach(function (y) {
                            userViewString += x.name + ':' + y.name + ',';
                        });
                    }
                });
                userViewString = userViewString.slice(0, userViewString.length - 1);
            } else {
                userViewString = 'Assign Role';
            }
            return userViewString;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_user2.default, { header: this.state.Header, body: this.state.Body, IsCheckBox: this.state.IsCheckbox, search: this.SearchUser, Filter: this.FilterUser, Sort: this.Sortuser, Pagination: this.props.Pagination, TabButtons: this.tabs, TabChange: this.ChangeTab, FilterData: [this.state.RolesData] })
            );
        }
    }]);

    return UserComponent;
}(_react2.default.Component);

exports.default = UserComponent;