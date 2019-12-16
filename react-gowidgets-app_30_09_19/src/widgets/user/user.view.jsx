'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = UserView;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _constants = require('../widget-controls/constants');

require('./user.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserView(props) {
    var _useState = (0, _react.useState)('');

    var _useState2 = _slicedToArray(_useState, 2);

    var Search = _useState2[0];
    var setSearch = _useState2[1];

    var onFilter = function onFilter(filterData) {
        props.Filter(filterData);
    };

    var changeTab = function changeTab(tabName) {
        props.TabChange(tabName);
    };

    var _handleKeyDown = function _handleKeyDown(e) {
        if (e.key === 'Enter') {
            props.search(Search);
        }
    };
    return _react2.default.createElement(
        'div',
        { className: 'pagewrapper' },
        _react2.default.createElement(
            _reactBootstrap.Row,
            { className: 'subHeader' },
            _react2.default.createElement(
                _reactBootstrap.Col,
                { md: 3 },
                _react2.default.createElement(
                    'h4',
                    null,
                    'Manage users'
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Col,
                { md: 9, className: 'searchwrapper' },
                _react2.default.createElement('input', { type: 'textbox', value: Search,
                    onChange: function onChange(event) {
                        return setSearch(event.target.value);
                    }, onKeyDown: _handleKeyDown, className: 'searchBox', placeholder: 'Search' }),
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    { variant: 'outline-primary' },
                    'Export'
                ),
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    { variant: 'primary' },
                    'Invite user'
                )
            )
        ),
        _react2.default.createElement(_constants.Filter, _extends({ Filter: onFilter }, props)),
        _react2.default.createElement(_constants.Tab, { Component: _react2.default.createElement(
                'div',
                { className: !props.IsActivated ? 'commonGrid' : 'commonGrid inactiveTable' },
                _react2.default.createElement(_constants.Table, props)
            ), TabButtons: props.TabButtons, ChangeTab: changeTab })
    );
}