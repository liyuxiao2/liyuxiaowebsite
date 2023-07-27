/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Toolbar } from "@mui/material";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { AppToolbar } from "./components/AppToolbar.js";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBh94An2j7PePvH5tYSzt3ILf8F65ucoUo",
  authDomain: "liyuxiaowebsite.firebaseapp.com",
  projectId: "liyuxiaowebsite",
  storageBucket: "liyuxiaowebsite.appspot.com",
  messagingSenderId: "489159034358",
  appId: "1:489159034358:web:200c39eea9ac08347ef3d7",
  measurementId: "G-12N441V6C2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


/**
 * The primary application layout.
 */
export function AppLayout(): JSX.Element {
  return (
    <div>
      <p> hello </p>
    </div>
  );
}
