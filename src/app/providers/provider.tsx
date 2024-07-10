import { persistor, store } from "app/store";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { Fallback } from "shared/ui/fallback/Fallback";

interface IProvider {
  readonly children: JSX.Element;
}

export const Providers: React.FC<IProvider> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};
