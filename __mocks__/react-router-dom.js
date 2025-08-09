// __mocks__/react-router-dom.js
const React = require("react");

module.exports = {
  BrowserRouter: ({ children }) =>
    React.createElement(React.Fragment, null, children),
  MemoryRouter: ({ children }) =>
    React.createElement(React.Fragment, null, children),
  Routes: ({ children }) => React.createElement(React.Fragment, null, children),
  Route: (props) => null,
  Link: ({ children }) => React.createElement(React.Fragment, null, children),
  NavLink: ({ children }) =>
    React.createElement(React.Fragment, null, children),
  useNavigate: () => () => {},
  useParams: () => ({}),
  useLocation: () => ({ pathname: "/" }),
};
