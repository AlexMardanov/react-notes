(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),function(){var t=n(0).enterModule;t&&t(e)}();var r=t.NOTES=[{id:1,text:"First test note"},{id:2,text:"Second test note"}];!function(){var t=n(0).default,o=n(0).leaveModule;t&&(t.register(r,"NOTES","/home/alexandr/Github/react-notes/src/api/notes.js"),o(e))}()}).call(this,n(2)(e))},,function(e,t,n){},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(1)),o=a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}n(12),function(){var t=n(0).enterModule;t&&t(e)}();var u=function(e){var t=e.text,n=e.handleTextChange,o=e.handleNoteAdd;return r.default.createElement("div",{className:"NoteEditor"},r.default.createElement("textarea",{rows:5,placeholder:"Enter note",className:"NoteEditor__textarea",value:t,onChange:n}),r.default.createElement("button",{className:"NoteEditor__button",onClick:o},"Add note"))};u.propTypes={text:o.default.string.isRequired,handleTextChange:o.default.func.isRequired,handleNoteAdd:o.default.func.isRequired};var l=u;t.default=l,function(){var t=n(0).default,r=n(0).leaveModule;t&&(t.register(u,"NoteEditor","/home/alexandr/Github/react-notes/src/components/NoteEditor.js"),t.register(l,"default","/home/alexandr/Github/react-notes/src/components/NoteEditor.js"),r(e))}()}).call(this,n(2)(e))},,function(e,t,n){},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(1)),o=a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}n(15),function(){var t=n(0).enterModule;t&&t(e)}();var u=function(e){var t=e.children,n=e.handleNoteDelete,o=e.id;return r.default.createElement("div",{className:"Note"},r.default.createElement("span",{className:"Note__delete",onClick:function(){return n(o)}},"✕"),t)};u.propTypes={children:o.default.string.isRequired,handleNoteDelete:o.default.func.isRequired,id:o.default.number.isRequired};var l=u;t.default=l,function(){var t=n(0).default,r=n(0).leaveModule;t&&(t.register(u,"Note","/home/alexandr/Github/react-notes/src/components/Note.js"),t.register(l,"default","/home/alexandr/Github/react-notes/src/components/Note.js"),r(e))}()}).call(this,n(2)(e))},,,function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(1)),o=u(n(3)),a=u(n(16));function u(e){return e&&e.__esModule?e:{default:e}}!function(){var t=n(0).enterModule;t&&t(e)}();var l=function(e){var t=e.notes,n=e.handleNoteDelete;return r.default.createElement("div",{className:"NotesGrid"},t.map(function(e){return r.default.createElement(a.default,{key:e.id,id:e.id,handleNoteDelete:n},e.text)}))};l.propTypes={notes:o.default.array.isRequired,handleNoteDelete:o.default.func.isRequired};var i=l;t.default=i,function(){var t=n(0).default,r=n(0).leaveModule;t&&(t.register(l,"NotesGrid","/home/alexandr/Github/react-notes/src/components/NotesGrid.js"),t.register(i,"default","/home/alexandr/Github/react-notes/src/components/NotesGrid.js"),r(e))}()}).call(this,n(2)(e))},function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_NotesGrid=__webpack_require__(19),_NotesGrid2=_interopRequireDefault(_NotesGrid),_NoteEditor=__webpack_require__(13),_NoteEditor2=_interopRequireDefault(_NoteEditor),_notes=__webpack_require__(10);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__(9),function(){var e=__webpack_require__(0).enterModule;e&&e(module)}();var App=function(_Component){function App(){var e,t,n;_classCallCheck(this,App);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=App.__proto__||Object.getPrototypeOf(App)).call.apply(e,[this].concat(o))),n.state={notes:_notes.NOTES,text:""},n.componentDidMount=function(){var e=JSON.parse(localStorage.getItem("notes"));e&&n.setState({notes:e})},n.componentDidUpdate=function(e,t){t.notes!==n.state.notes&&n.saveToLocalStorage()},n.handleTextChange=function(e){n.setState({text:e.target.value})},n.handleNoteAdd=function(){var e={text:n.state.text,id:Date.now()};n.setState({notes:[e].concat(_toConsumableArray(n.state.notes))}),n.clearText()},n.clearText=function(){n.setState({text:""})},n.saveToLocalStorage=function(){var e=JSON.stringify(n.state.notes);localStorage.setItem("notes",e)},n.handleNoteDelete=function(e){n.setState({notes:n.state.notes.filter(function(t){return t.id!==e})})},_possibleConstructorReturn(n,t)}return _inherits(App,_Component),_createClass(App,[{key:"render",value:function(){return _react2.default.createElement("section",{className:"App"},_react2.default.createElement("h1",null,"React Notes"),_react2.default.createElement(_NoteEditor2.default,{text:this.state.text,handleTextChange:this.handleTextChange,handleNoteAdd:this.handleNoteAdd}),_react2.default.createElement(_NotesGrid2.default,{notes:this.state.notes,handleNoteDelete:this.handleNoteDelete}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(_react.Component),_default=App;exports.default=_default,function(){var e=__webpack_require__(0).default,t=__webpack_require__(0).leaveModule;e&&(e.register(App,"App","/home/alexandr/Github/react-notes/src/containers/App.js"),e.register(_default,"default","/home/alexandr/Github/react-notes/src/containers/App.js"),t(module))}()}).call(this,__webpack_require__(2)(module))},,,,,,,,,,,function(e,t,n){"use strict";(function(e){var t=u(n(1)),r=u(n(29)),o=n(0),a=u(n(20));function u(e){return e&&e.__esModule?e:{default:e}}(0,o.hot)(e)(a.default),r.default.render(t.default.createElement(a.default,null),document.querySelector("#root"))}).call(this,n(2)(e))}],[[31,0,1]]]);
//# sourceMappingURL=main.4d7b84.bundle.js.map