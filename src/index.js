import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import { GlobalStyle } from "styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "redux/config/configStore";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
  // </React.StrictMode>
);
