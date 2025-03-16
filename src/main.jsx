/* eslint-disable no-unused-vars */
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import "./index.css";
import App from "./App.jsx"; // Lazy Loadni olib tashladik

// ErrorBoundary komponenti
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Xato aniqlandi:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>❌ Xatolik yuz berdi. Iltimos, sahifani qayta yuklang.</h1>;
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
