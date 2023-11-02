import "./App.css";
import { AlertsProvider } from "./contexts/alerts.context";
import { DashboardPage } from "./pages/DashboardPage";

function App() {
  return (
    <>
      <AlertsProvider>
        <DashboardPage />
      </AlertsProvider>
    </>
  );
}

export default App;
