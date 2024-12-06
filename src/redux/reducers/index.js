import {combineReducers} from "redux";
import titleReducer from "./titleReducer";
import contactsReducer from "./contactsReducer";
import taskReducer, {categoriesReducer} from "./tasksReducer";

export const rootReducer = combineReducers({
    titleReducer,
    contactsReducer,
    taskReducer,
    categoriesReducer

})