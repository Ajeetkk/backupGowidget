'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _user = require('./src/widgets/user/user.component');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImY2MFJ6U3lQN21iRERIWlA4QVE2NzVxems4MENkM2hEa21OWHR3XzA0a2cifQ.eyJleHAiOjE1Njg4OTAwMzksIm5iZiI6MTU2ODgwMzYzOSwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9nb29yZy5iMmNsb2dpbi5jb20vNmQ5Y2FkMmYtN2UwYy00NWY2LThlNWQtNDI5NGE5ODZiZGIwL3YyLjAvIiwic3ViIjoiOTI0NGY0ZWItZjRkMi00ZjBmLWI1ZGQtYWViMzMzNTAxOThjIiwiYXVkIjoiMjQ1Y2ZkNDEtYzQwYi00NDI3LWE2YzMtNmMxNTViNzhjOGJkIiwiYWNyIjoiYjJjXzFhX3NpZ251cF9zaWduaW5fcWEiLCJub25jZSI6ImE2YmYyNTMzLWI0OWUtNDNhOC05NjU5LTZlMjVmN2EyNmYyNyIsImlhdCI6MTU2ODgwMzYzOSwiYXV0aF90aW1lIjoxNTY4ODAzNjM5LCJuYW1lIjoiTSAxLjEgVXNlciIsImVtYWlscyI6WyJtMUBieW9tLmRlIl0sImdpdmVuX25hbWUiOiJNIDEuMSIsImZhbWlseV9uYW1lIjoiVXNlciIsInJvbGVzIjpbIkhpdmVBZG1pbiJdLCJwZXJtaXNzaW9ucyI6W10sImlzQWN0aXZlIjp0cnVlLCJpc0FwcHJvdmVkIjp0cnVlLCJyZWdpc3RyYXRpb25EYXRlVGltZSI6IjcvMjkvMjAxOSAxMDowNjo0OSBBTSJ9.zdH1AHzECRFerlegtw65GM3Qj8xQ_GLY9q4nNIH9YJ-f8JM9W92kgUvVfVX_4e69hEohuU_r6xXgCyzrVhXGXtdHO86Y62xf78NsLBISSkOYa1OoPrUXfSObgv7Rz-G-d5vLF2qLIMX6pqzj4bfTBYlKNE_VRi1DnesjNWY20sb31o1zWtE1UzbhrARQVGI-cPqqvNHechx28Oe1NIKdYUfUaC-QbbNWl-nY9cCpyCaMK9X8-az04eMdXQr67ohWW0eoVT5cDWxxuHKJLnRLYjIOUTqgtv60fPVBXre8GEVxksSUTBZvRB_Dt0gNxCIBrxOsYRI2ybpAO0KFEBtegQ');
  return _react2.default.createElement(
    'div',
    { className: 'App' },
    _react2.default.createElement(_user2.default, null)
  );
}

exports.default = App;