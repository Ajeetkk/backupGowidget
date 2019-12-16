'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _constants = require('../constants');

require('./table.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Component) {
    _inherits(Table, _Component);

    function Table() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Table);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(_ref, [this].concat(args))), _this), _this.header = function () {
            return _react2.default.createElement(
                'ul',
                { className: 'commonGridHeader', id: 'company-header' },
                _this.props.header.map(function (th, i) {
                    return _react2.default.createElement(
                        _react2.default.Fragment,
                        { key: i },
                        '  ',
                        _this.tableHead(th.Type, th.Text),
                        ' '
                    );
                })
            );
        }, _this.body = function () {
            return _react2.default.createElement(
                'div',
                { className: 'commonGridScrollable' },
                _this.props.body.map(function (data, i) {
                    return _react2.default.createElement(
                        'ul',
                        { key: i },
                        data.body.map(function (td, j) {
                            return _react2.default.createElement(
                                'li',
                                { key: j },
                                ' ',
                                _this.tableData(td.Type, td.Text),
                                ' '
                            );
                        })
                    );
                })
            );
        }, _this.checkBox = function () {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    { className: 'checkBoxcontainer' },
                    _react2.default.createElement('input', { type: 'checkbox' }),
                    _react2.default.createElement('span', { className: 'checkmark' })
                )
            );
        }, _this.tableHead = function (type, data) {

            switch (type) {
                case 'CheckBox':
                    return _react2.default.createElement(
                        'li',
                        null,
                        _this.checkBox()
                    );
                case 'Text':
                    return _react2.default.createElement(
                        'li',
                        { onClick: function onClick() {
                                return _this.props.Sort(data);
                            } },
                        ' ',
                        data,
                        ' '
                    );
                default:
                    return _react2.default.createElement(
                        'div',
                        null,
                        ' '
                    );
            }
        }, _this.tableData = function (type, data) {
            switch (type) {
                case 'Link':
                    return _react2.default.createElement(
                        'a',
                        { href: data },
                        ' ',
                        data,
                        ' '
                    );
                case 'Label':
                    return _react2.default.createElement(
                        'span',
                        { className: 'display-name' },
                        ' ',
                        data,
                        ' '
                    );
                case 'Icon':
                    return _react2.default.createElement(
                        'div',
                        null,
                        ' ',
                        data.map(function (d, i) {
                            return _react2.default.createElement(_constants.Icons, { IconName: d, key: i });
                        }),
                        ' '
                    );
                case 'Telephone':
                    return _react2.default.createElement(
                        'a',
                        { href: "tel:" + data },
                        ' ',
                        data,
                        ' '
                    );
                case 'Email':
                    return _react2.default.createElement(
                        'a',
                        { href: "mailto:" + data },
                        ' ',
                        data,
                        ' '
                    );
                case 'CheckBox':
                    return _this.checkBox();
                default:
                    return _react2.default.createElement(
                        'div',
                        null,
                        ' '
                    );
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Table, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.header(),
                this.body()
            );
        }
    }]);

    return Table;
}(_react.Component);

exports.default = Table;