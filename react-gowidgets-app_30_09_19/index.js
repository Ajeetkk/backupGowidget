'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _user = require('./src/widgets/user/user.component');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
  localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImY2MFJ6U3lQN21iRERIWlA4QVE2NzVxems4MENkM2hEa21OWHR3XzA0a2cifQ.eyJleHAiOjE1Njk1Njk5NjEsIm5iZiI6MTU2OTQ4MzU2MSwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9nb29yZy5iMmNsb2dpbi5jb20vNmQ5Y2FkMmYtN2UwYy00NWY2LThlNWQtNDI5NGE5ODZiZGIwL3YyLjAvIiwic3ViIjoiZWZlYzk1ZTUtNjg5Yi00YmVhLTkwZjMtYWYzZDQ3ZjE3YzcwIiwiYXVkIjoiMjQ1Y2ZkNDEtYzQwYi00NDI3LWE2YzMtNmMxNTViNzhjOGJkIiwiYWNyIjoiYjJjXzFhX3NpZ251cF9zaWduaW5fcWEiLCJub25jZSI6ImZiMWY2Y2YxLTdiYmYtNGYxMi1iODI2LTc1ODZhZjQ1NGU4OCIsImlhdCI6MTU2OTQ4MzU2MSwiYXV0aF90aW1lIjoxNTY5NDgzNTYxLCJuYW1lIjoiSW52aXRlZCBVc2VyIDEiLCJlbWFpbHMiOlsiaW52aTFAYnlvbS5kZSJdLCJnaXZlbl9uYW1lIjoiSW52aXRlZCIsImZhbWlseV9uYW1lIjoiVXNlciAxIiwicm9sZXMiOlsiSGl2ZUFkbWluIl0sInBlcm1pc3Npb25zIjpbXSwiaXNBY3RpdmUiOnRydWUsImlzQXBwcm92ZWQiOnRydWUsInJlZ2lzdHJhdGlvbkRhdGVUaW1lIjoiNy8yOS8yMDE5IDEwOjM5OjM5IEFNIn0.HvhRz_wuH5KBHOgyw_EwellYMzHmipFaclwGr_eFmf-mVvGFsT5iBbtXE6Da-gH-PnMC-H2Gs8F9Q99Rr1P_R81PsAM5613DmVCucyb37hT3IPzACIm3j0u5AFCIPuhRo4mALlpX34rczMudrExifLdCIMCSqyLyV3-VqROEg_KMk4zHxgQHvtcqrGHedTY00Uq0Fmo7GrEVyR-IHXHBk0vWdGnfujvsVIo8n24sinX7oZwdmsLayzfdJzE3S2Np99ddvCV6d9zg1ZYV6a114RSBNuDKStgoWGzw19vhOJqRDlwrt6t7nZe9iTkdUQ-Lb8OND7RACYtvugzlPo5znQ');
  
  return _react2.default.createElement(
    'div',
    { className: 'App' },
    _react2.default.createElement(
      'h1',
      null,
     
    ),
   
    _react2.default.createElement(_user2.default, props)
  );
}

exports.default = App;