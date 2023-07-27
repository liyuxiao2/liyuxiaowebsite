/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { router } from "./routes/index.js";
import { ThemeProvider } from "./theme/index.js";
import { initializeApp } from "firebase/app";





//fire base app
const firebaseApp =  initializeApp({
  apiKey: "AIzaSyBh94An2j7PePvH5tYSzt3ILf8F65ucoUo",
  authDomain: "liyuxiaowebsite.firebaseapp.com",
  projectId: "liyuxiaowebsite",
  storageBucket: "liyuxiaowebsite.appspot.com",
  messagingSenderId: "489159034358",
  appId: "1:489159034358:web:200c39eea9ac08347ef3d7",
  measurementId: "G-12N441V6C2"
})





const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

// Render the top-level React component
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider>
        <SnackbarProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </SnackbarProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
