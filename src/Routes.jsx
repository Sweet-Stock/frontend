import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InstitucionalPage from "./pages/institucional_page/InstitucionalPage";
import DashBoardPage from "./pages/DashboardPage/DashBoardPage";
import ChooseSignPage from "./pages/choose_sign_page/ChooseSignPage";
import SignPage from "./pages/sign_up/SignPage";
import LoginPage from "./pages/login/LoginPage";
import ErrorPage from "./pages/error/ErrorPage";
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<InstitucionalPage />} />
          <Route path="dashboard" element={<DashBoardPage />} />
          <Route path="cadastro">
            <Route index element={<ChooseSignPage />} />
            <Route path="empresa" element={<SignPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="error">
            <Route path={"404"} element={<ErrorPage status={"404"} />} />
            <Route path={"500"} element={<ErrorPage status={"500"} />} />
            <Route
              path={sessionStorage.getItem("status")}
              element={<ErrorPage status={sessionStorage.getItem("status")} />}
            />
          </Route>
          <Route path="*" element={<ErrorPage status={"404"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
