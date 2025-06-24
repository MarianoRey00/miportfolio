import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProjectProvider } from "./context/ProjectContext";
import { UserProvider } from "./context/UserContext";
import { AppearanceProvider } from "./context/AppearanceContext";
import { NotificationProvider } from "./context/NotificationContext";
import { SaleProvider } from "./context/SaleContext";
import { PlanProvider } from "./context/PlanContext";
import { Toaster } from "react-hot-toast";
import Router from "./components/Router";

function App() {
  return (
    <>
      <Toaster />
      <AuthProvider>
        <ProjectProvider>
          <UserProvider>
            <AppearanceProvider>
              <NotificationProvider>
                <SaleProvider>
                  <PlanProvider>
                    <BrowserRouter>
                      <Router />
                    </BrowserRouter>
                  </PlanProvider>
                </SaleProvider>
              </NotificationProvider>
            </AppearanceProvider>
          </UserProvider>
        </ProjectProvider>
      </AuthProvider>
    </>
  );
}

export default App;
