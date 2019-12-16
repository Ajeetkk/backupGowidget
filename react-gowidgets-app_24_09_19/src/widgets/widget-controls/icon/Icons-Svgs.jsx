'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Icons;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconList = require('../../../assets/IconList');

var _IconList2 = _interopRequireDefault(_IconList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Icons(props) {
    var deleteIcon = function deleteIcon() {
        return _react2.default.createElement(
            'svg',
            { version: '1.1', id: 'deleteIcon', x: '0px',
                y: '0px', width: '16px', height: '16px', viewBox: '0 0 16 16', enableBackground: 'new 0 0 16 16' },
            _react2.default.createElement('path', { d: _IconList2.default.Delete })
        );
    };

    var reloadIcon = function reloadIcon() {
        return _react2.default.createElement(
            'svg',
            { version: '1.1', x: '0px', y: '0px', width: '18px',
                height: '17px', viewBox: '0 0 18 17', enableBackground: 'new 0 0 18 17' },
            _react2.default.createElement('path', { strokeWidth: '0.2', d: _IconList2.default.Reload })
        );
    };

    var revokeIcon = function revokeIcon() {
        return _react2.default.createElement(
            'svg',
            { version: '1.1', x: '0px',
                y: '0px', width: '16px', height: '16px', viewBox: '0 0 16 16', enableBackground: 'new 0 0 16 16' },
            _react2.default.createElement('path', { d: _IconList2.default.Not_allowed })
        );
    };

    var selectIcon = function selectIcon() {
        switch (props.IconName) {
            case 'deleteIcon':
                return _react2.default.createElement(
                    'div',
                    null,
                    deleteIcon()
                );
            case 'reloadIcon':
                return _react2.default.createElement(
                    'div',
                    null,
                    reloadIcon()
                );
            case 'revokeIcon':
                return _react2.default.createElement(
                    'div',
                    null,
                    revokeIcon()
                );
            default:
                return _react2.default.createElement(
                    'div',
                    null,
                    ' '
                );
        }
    };
    return _react2.default.createElement(
        'div',
        null,
        selectIcon()
    );
}