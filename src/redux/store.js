import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter" // counterReducer is a name. You can name this whatever. Since this is for a counter app, counterReducer is pretty descriptive.

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})