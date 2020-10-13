import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageInput from "./image_file_input/image_file_input";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = props =>(
  <ImageInput {...props} imageUploader={imageUploader}/>
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
