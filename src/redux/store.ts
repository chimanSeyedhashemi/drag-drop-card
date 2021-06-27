import {
  combineReducers,
  createStore,
  ReducersMapObject,
  AnyAction,
  Reducer,
} from "redux";
import { reducer as UsersReducer } from "./reducer/users";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { IUser } from "../model/user";

const reducers: ReducersMapObject<any, AnyAction> = {
  users: UsersReducer as Reducer<Array<IUser>, AnyAction>,
};

export const main_reducer = combineReducers(reducers);

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, main_reducer);

export const Store2 = createStore(persistedReducer);
export const persistor = persistStore(Store2);
