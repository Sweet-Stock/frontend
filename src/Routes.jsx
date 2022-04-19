import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InstitucionalPage from "./pages/InstitucionalPage";
import DashBoardPage from "./pages/DashBoardPage";
import SignPage from "./pages/SignPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import IngredientCardDash from "./pages/components/IngredientCardDash"
export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<InstitucionalPage />} />
                    <Route path="dashboard" element={<DashBoardPage />} />
                    <Route path="cadastro" element={<SignPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="teste-componente" element={<IngredientCardDash cardTitle="Leite condesado - Nestlé" cardAmount={20} />} />
                    <Route path="error">
                        <Route
                            path={sessionStorage.getItem("status")}
                            element={<ErrorPage status={sessionStorage.getItem("status")} />}
                        />
                        <Route path={"404"} element={<ErrorPage status={"404"} />} />
                        <Route path={"500"} element={<ErrorPage status={"500"} />} />
                    </Route>
                    <Route path="*" element={<ErrorPage status={"404"} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

