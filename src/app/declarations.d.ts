import { persistStore, Persistor } from "redux-persist";

declare module "redux-persist/es/persistStore" {
  import { persistStore } from "redux-persist/es/types";

  export default function persistStore(
    store: any,
    options?: any,
    callback?: () => any
  ): Persistor;
}
