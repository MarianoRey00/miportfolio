import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProjectProvider } from "./context/ProjectContext";
import { UserProvider } from "./context/UserContext";
import { AppearanceProvider } from "./context/AppearanceContext";
import { NotificationProvider } from "./context/NotificationContext";
import { Toaster } from "react-hot-toast";
import Router from "./components/Router";

function App() {
  return (
    <>
      <AuthProvider>
        <Toaster />
        <ProjectProvider>
          <UserProvider>
            <AppearanceProvider>
              <NotificationProvider>
                <BrowserRouter>
                  <Router />
                </BrowserRouter>
              </NotificationProvider>
            </AppearanceProvider>
          </UserProvider>
        </ProjectProvider>
      </AuthProvider>
    </>
  );
}

export default App;
