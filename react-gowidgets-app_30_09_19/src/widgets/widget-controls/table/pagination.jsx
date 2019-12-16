'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = PaginationView;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Pagination = require('react-bootstrap/Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PaginationView(props) {

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _Pagination2.default,
            null,
            _react2.default.createElement(_Pagination2.default.Prev, null),
            _react2.default.createElement(_Pagination2.default.Next, null)
        )
    );
}