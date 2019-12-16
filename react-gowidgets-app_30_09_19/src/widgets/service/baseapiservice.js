'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axiosInstance = _axios2.default.create({
    baseURL: ''
});

axiosInstance.interceptors.request.use(function (request) {
    request.headers.Authorization = localStorage.getItem('token');
    return request;
}, function (error) {
    return Promise.reject(_extends({}, error));
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(_extends({}, error));
});

var BaseApiService = function () {
    function BaseApiService() {
        _classCallCheck(this, BaseApiService);
    }

    _createClass(BaseApiService, [{
        key: 'get',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(url, params, isLoader) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return axiosInstance.get(url).then(function (resp) {
                                    return resp.data;
                                });

                            case 2:
                                return _context.abrupt('return', _context.sent);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function get(_x, _x2, _x3) {
                return ref.apply(this, arguments);
            }

            return get;
        }()
    }, {
        key: 'post',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(url, reqObject, isLoader) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return axiosInstance.post(url, reqObject);

                            case 2:
                                return _context2.abrupt('return', _context2.sent);

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function post(_x4, _x5, _x6) {
                return ref.apply(this, arguments);
            }

            return post;
        }()
    }, {
        key: 'put',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(url, reqObject, isLoader) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return axiosInstance.put(url, reqObject);

                            case 2:
                                return _context3.abrupt('return', _context3.sent);

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function put(_x7, _x8, _x9) {
                return ref.apply(this, arguments);
            }

            return put;
        }()
    }, {
        key: 'Delete',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(url, params, isLoader) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return axiosInstance.delete(url, params);

                            case 2:
                                return _context4.abrupt('return', _context4.sent);

                            case 3:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function Delete(_x10, _x11, _x12) {
                return ref.apply(this, arguments);
            }

            return Delete;
        }()
    }]);

    return BaseApiService;
}();

exports.default = BaseApiService;