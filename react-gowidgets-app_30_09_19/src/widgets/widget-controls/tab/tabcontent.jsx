'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TabContent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TabContent(props) {
    return _react2.default.createElement(
        'div',
        null,
        props.Content
    );
}