"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TabButtons;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TabButtons(props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "div",
            { className: "btn-group" },
            props.TabButtons.map(function (data, i) {
                return _react2.default.createElement(
                    "button",
                    { className: "btn btn-primary" + (data.IsActive ? " active" : ''), type: "button", key: i, onClick: function onClick() {
                            return props.ChangeTab(data.Name);
                        } },
                    " ",
                    data.Name,
                    " "
                );
            })
        )
    );
}