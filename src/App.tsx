import AppRoutes from "./Routes";

import { Provider } from "react-redux";

import store from "./store";

import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AppRoutes />
    </Provider>
  );
};

export default App;
