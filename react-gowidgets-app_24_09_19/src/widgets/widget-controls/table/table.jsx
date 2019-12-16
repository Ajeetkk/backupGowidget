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

var header = void 0;
var body = void 0;

var Table = function (_Component) {
    _inherits(Table, _Component);

    function Table() {
        _classCallCheck(this, Table);

        return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    _createClass(Table, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            header = function header() {
                return _react2.default.createElement(
                    'ul',
                    { className: 'commonGridHeader', id: 'company-header' },
                    _react2.default.createElement(
                        'li',
                        null,
                        _this2.checkBox()
                    ),
                    _this2.props.header.map(function (data, i) {
                        return _react2.default.createElement(
                            'li',
                            { key: i, onClick: function onClick() {
                                    return _this2.props.Sort(data.Name);
                                } },
                            ' ',
                            data.Name,
                            ' '
                        );
                    })
                );
            };

            body = function body() {
                return _react2.default.createElement(
                    'div',
                    { className: 'commonGridScrollable' },
                    _this2.props.body.map(function (data, i) {
                        return _react2.default.createElement(
                            'ul',
                            { key: i },
                            data.body.map(function (user, j) {
                                return _react2.default.createElement(
                                    'li',
                                    { key: j },
                                    ' ',
                                    _this2.tableData(user.Type, user.Text),
                                    ' '
                                );
                            })
                        );
                    })
                );
            };

           let checkBox = function checkBox() {
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
            };

           let tableData = function tableData(type, data) {
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
                            _react2.default.createElement(_constants.Icons, { IconName: data }),
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
                        return _this2.checkBox();
                    default:
                        return _react2.default.createElement(
                            'div',
                            null,
                            ' '
                        );
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                Error
                // header(),
                // body()
            );
        }
    }]);

    return Table;
}(_react.Component);

exports.default = Table;