"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("./filter.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import PropTypes from "prop-types";
// import "./filter.scss";

// class Filter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterUser: {
//         Role: [
//           { name: "GM User", id: 2 },
//           // { name: "Service Engineer", id: 3 },
//           { name: "Company  Admin", id: 4 }
//         ]
//         // Type: [
//         //   { name: "Admin", id: 1 },
//         //   { name: "Guest", id: 2 },
//         //   { name: "Guest 2", id: 3 },
//         //   { name: "Guest 3", id: 4 }
//         // ]
//       },
//       filterCheck: [],
//       applyFilterCheck: [],
//       ResultsShow: "",
//       roleResults: false,
//       typeResults: false,
//       activeShow: false,
//       checkBoxDefaultStatus: false,
//       activeButton: false,
//       submitting: true
//     };
//   }


//   componentDidMount() {
//     document.addEventListener("click", this.handleClickOutside, true);
//   }
//   componentWillUnmount() {
//     document.removeEventListener("click", this.handleClickOutside, true);
//   }
//   handleClickOutside = event => {
//     const domNode = ReactDOM.findDOMNode(this);
//     if (!domNode || !domNode.contains(event.target)) {
//       this.setState({
//         ResultsShow: ""
//       });
//     }
//   };

//   //Filter popup open
//   handleRolePopup = (method, e) => {
//     this.state.ResultsShow !== method
//       ? this.setState({ ResultsShow: method })
//       : this.setState({ ResultsShow: "" });
//   };

//   //Filter get checkbox value
//   handleCheckValue(filterType, e) {
//     var arr = {};
//     arr["id"] = e.target.id;
//     arr["name"] = e.target.name;
//     arr["filter"] = filterType;
//     const filterCheck = this.state.filterCheck;
//     if (e.target.checked) {
//       filterCheck.push(arr);
//     } else {
//       var index = filterCheck.findIndex(
//         p => p.name === e.target.name && p.filter === filterType
//       );
//       filterCheck.splice(index, 1);
//     }
//     this.setState({ filterCheck: filterCheck });
//     const checkNew = [...this.state.filterCheck];
//     console.log("checkNew", checkNew);
//     if (filterCheck.length === 0) {
//       this.setState({ submitting: true, activeButton: false });
//     } else {
//       this.setState({ submitting: false, activeButton: true });
//     }
//   }

//   //Reset all
//   handleResetAll = () => {
//     this.setState({
//       filterCheck: [],
//       applyFilterCheck: [],
//       activeShow: false,
//       activeButton: false,
//       submitting: true,
//       ResultsShow: ""
//     });
//     this.props.Filter([]);
//   };

//   handleClearFilter = check => {
//     //console.log(check.filter);
//     const filterCheck = this.state.filterCheck;
//     var index = filterCheck.findIndex(
//       p => p.id === check.id && p.filter === check.filter
//     );
//     filterCheck.splice(index, 1);

//     const applyFilterCheck = this.state.applyFilterCheck;
//     var checkIndex = applyFilterCheck.findIndex(
//       p => p.id === check.id && p.filter === check.filter
//     );
//     applyFilterCheck.splice(checkIndex, 1);

//     if (applyFilterCheck.length === 0) {
//       this.setState({
//         activeShow: false,
//         activeButton: false,
//         submitting: true
//       });
//     }
//     this.setState({
//       filterCheck: filterCheck,
//       applyFilterCheck: applyFilterCheck
//     });
//     this.props.Filter(this.state.filterCheck);
//   };

//   //Filter popup close
//   handleFilter = e => {
//     this.setState({ applyFilterCheck: [...this.state.filterCheck] });
//     e.preventDefault();
//     this.setState({
//       ResultsShow: "",
//       activeShow: true,
//       typeResults: true,
//       roleResults: false
//     });
//     this.props.Filter(this.state.filterCheck);
//   };

//   render() {
//     const {
//       activeButton,
//       activeShow,
//       filterUser,
//       filterCheck,
//       applyFilterCheck,
//       submitting
//     } = this.state;

//     return (
//       <section className="filter-widget col-12">
//         {Object.keys(filterUser).map((method, methodIndex) => {
//           return (
//             <React.Fragment key={method}>
//               <div className="filter-dropdown">
//                 <div className="role-filter float-left pl-0 pr-0">
//                   <button
//                     className={
//                       "button col-12 " +
//                       (activeButton ? "button-active " : "button-inactive")
//                     }
//                     value={method}
//                     onClick={this.handleRolePopup.bind(this, method)}
//                   >
//                     {method} <span className="down-arrow">&rsaquo; </span>
//                   </button>
//                 </div>
//                 {this.state.ResultsShow === method ? (
//                   <div className="p-10 filter-popup float-left" id={method}>
//                     {filterUser[method].map((v, index) => {
//                       return (
//                         <label className="checkBoxcontainer" key={v.id}>
//                           <input
//                             onChange={this.handleCheckValue.bind(this, method)}
//                             name={v.name}
//                             value={v.id}
//                             id={v.id}
//                             checked={
//                               filterCheck.findIndex(
//                                 p => p.id === v.id && p.filter === method
//                               ) !== -1
//                                 ? true
//                                 : false
//                             }
//                             type="checkbox"
//                           />
//                           <span className="checkmark"></span>
//                           <span>{v.name}</span>
//                         </label>
//                       );
//                     })}

//                     <button
//                       className="apply-btn float-right button"
//                       onClick={this.handleFilter}
//                       disabled={submitting}
//                     >
//                       Apply
//                     </button>
//                   </div>
//                 ) : null}
//               </div>
//             </React.Fragment>
//           );
//         })}

//         <div
//           className={
//             "selected-filter float-left col-9 " + (!activeShow ? "hidden " : "")
//           }
//         >
//           {applyFilterCheck.map(check => (
//             <div className="selected-filter-tab" key={check.filter + check.id}>
//               <span>{check.name}</span>
//               <span
//                 id={check.id}
//                 onClick={() => this.handleClearFilter(check)}
//                 className="close-icon"
//               >
//                 &times;
//               </span>
//             </div>
//           ))}

//           <button className="filter-reset" onClick={this.handleResetAll}>
//             Reset all
//           </button>
//         </div>
//       </section>
//     );
//   }
// }


// export default Filter;

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter(props) {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

    _this.handleClickOutside = function (event) {
      var domNode = _reactDom2.default.findDOMNode(_this);
      if (!domNode || !domNode.contains(event.target)) {
        _this.setState({
          ResultsShow: ""
        });
      }
    };

    _this.handleRolePopup = function (method, e) {
      _this.state.ResultsShow !== method ? _this.setState({ ResultsShow: method }) : _this.setState({ ResultsShow: "" });
    };

    _this.handleResetAll = function () {
      _this.setState({
        filterCheck: [],
        applyFilterCheck: [],
        activeShow: false,
        activeButton: false,
        submitting: true,
        ResultsShow: ""
      });
      _this.props.Filter([]);
    };

    _this.handleClearFilter = function (check) {
      //console.log(check.filter);
      var filterCheck = _this.state.filterCheck;
      var index = filterCheck.findIndex(function (p) {
        return p.id === check.id && p.filter === check.filter;
      });
      filterCheck.splice(index, 1);

      var applyFilterCheck = _this.state.applyFilterCheck;
      var checkIndex = applyFilterCheck.findIndex(function (p) {
        return p.id === check.id && p.filter === check.filter;
      });
      applyFilterCheck.splice(checkIndex, 1);

      if (applyFilterCheck.length === 0) {
        _this.setState({
          activeShow: false,
          activeButton: false,
          submitting: true
        });
      }
      _this.setState({
        filterCheck: filterCheck,
        applyFilterCheck: applyFilterCheck
      });
      _this.props.Filter(_this.state.filterCheck);
    };

    _this.handleFilter = function (e) {
      _this.setState({ applyFilterCheck: [].concat(_toConsumableArray(_this.state.filterCheck)) });
      e.preventDefault();
      _this.setState({
        ResultsShow: "",
        activeShow: true,
        typeResults: true,
        roleResults: false
      });
      _this.props.Filter(_this.state.filterCheck);
    };

    _this.state = {
      filterUser: {
        Role: [{ name: "GM User", id: 2 },
        // { name: "Service Engineer", id: 3 },
        { name: "Company  Admin", id: 4 }]
        // Type: [
        //   { name: "Admin", id: 1 },
        //   { name: "Guest", id: 2 },
        //   { name: "Guest 2", id: 3 },
        //   { name: "Guest 3", id: 4 }
        // ]
      },
      filterCheck: [],
      applyFilterCheck: [],
      ResultsShow: "",
      roleResults: false,
      typeResults: false,
      activeShow: false,
      checkBoxDefaultStatus: false,
      activeButton: false,
      submitting: true
    };
    return _this;
  }

  _createClass(Filter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("click", this.handleClickOutside, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.handleClickOutside, true);
    }

    //Filter popup open

  }, {
    key: "handleCheckValue",


    //Filter get checkbox value
    value: function handleCheckValue(filterType, e) {
      var arr = {};
      arr["id"] = e.target.id;
      arr["name"] = e.target.name;
      arr["filter"] = filterType;
      var filterCheck = this.state.filterCheck;
      if (e.target.checked) {
        filterCheck.push(arr);
      } else {
        var index = filterCheck.findIndex(function (p) {
          return p.name === e.target.name && p.filter === filterType;
        });
        filterCheck.splice(index, 1);
      }
      this.setState({ filterCheck: filterCheck });
      var checkNew = [].concat(_toConsumableArray(this.state.filterCheck));
      console.log("checkNew", checkNew);
      if (filterCheck.length === 0) {
        this.setState({ submitting: true, activeButton: false });
      } else {
        this.setState({ submitting: false, activeButton: true });
      }
    }

    //Reset all


    //Filter popup close

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state;
      var activeButton = _state.activeButton;
      var activeShow = _state.activeShow;
      var filterUser = _state.filterUser;
      var filterCheck = _state.filterCheck;
      var applyFilterCheck = _state.applyFilterCheck;
      var submitting = _state.submitting;


      return _react2.default.createElement(
        "section",
        { className: "filter-widget col-12" },
        Object.keys(filterUser).map(function (method, methodIndex) {
          return _react2.default.createElement(
            _react2.default.Fragment,
            { key: method },
            _react2.default.createElement(
              "div",
              { className: "filter-dropdown" },
              _react2.default.createElement(
                "div",
                { className: "role-filter float-left pl-0 pr-0" },
                _react2.default.createElement(
                  "button",
                  {
                    className: "button col-12 " + (activeButton ? "button-active " : "button-inactive"),
                    value: method,
                    onClick: _this2.handleRolePopup.bind(_this2, method)
                  },
                  method,
                  " ",
                  _react2.default.createElement(
                    "span",
                    { className: "down-arrow" },
                    "› "
                  )
                )
              ),
              _this2.state.ResultsShow == method ? _react2.default.createElement(
                "div",
                { className: "p-10 filter-popup float-left", id: method },
                filterUser[method].map(function (v, index) {
                  return _react2.default.createElement(
                    "label",
                    { className: "checkBoxcontainer", key: v.id },
                    _react2.default.createElement("input", {
                      onChange: _this2.handleCheckValue.bind(_this2, method),
                      name: v.name,
                      value: v.id,
                      id: v.id,
                      checked: filterCheck.findIndex(function (p) {
                        return p.id == v.id && p.filter == method;
                      }) != -1 ? true : false,
                      type: "checkbox"
                    }),
                    _react2.default.createElement("span", { className: "checkmark" }),
                    _react2.default.createElement(
                      "label",
                      { htmlFor: v.id },
                      v.name
                    )
                  );
                }),
                _react2.default.createElement(
                  "button",
                  {
                    className: "apply-btn button",
                    onClick: _this2.handleFilter,
                    disabled: submitting
                  },
                  "Apply"
                )
              ) : null
            )
          );
        }),
        _react2.default.createElement(
          "div",
          {
            className: "selected-filter float-left col-9 " + (!activeShow ? "hidden " : "")
          },
          applyFilterCheck.map(function (check) {
            return _react2.default.createElement(
              "div",
              { className: "selected-filter-tab", key: check.filter + check.id },
              _react2.default.createElement(
                "span",
                null,
                check.name
              ),
              _react2.default.createElement(
                "span",
                {
                  id: check.id,
                  onClick: function onClick() {
                    return _this2.handleClearFilter(check);
                  },
                  className: "close-icon"
                },
                "×"
              )
            );
          }),
          _react2.default.createElement(
            "button",
            { className: "filter-reset", onClick: this.handleResetAll },
            "Reset all"
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;