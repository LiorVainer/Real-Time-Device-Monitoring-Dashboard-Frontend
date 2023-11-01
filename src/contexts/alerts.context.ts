import React, { createContext, useContext } from "react";
import { useWebSocket } from "../hooks/useWebSocket"; // Assuming the useWebSocket hook is in a separate file

type WebSocketContextType = ReturnType<typeof useWebSocket>;

const AlertsContext = createContext<WebSocketContextType>({
  alerts: [],
  ws: null,
});

export const useAlertsContext = () => {
  const context = useContext(AlertsContext);

  if (!context) {
    throw new Error("useAlertsContext must be used within an AlertsProvider");
  }

  return context;
};

const AlertsProviderComp = AlertsContext.Provider;

export const AlertsProvider: React.FC = ({ children }) => {
  const alertsWebSocket = useWebSocket(); // Using the hook to get the WebSocket connection and alerts

  return (
    <AlertsProviderComp.Provider value={alertsWebSocket}>
      {children}
    </AlertsProviderComp.Provider>
  );
};

export default AlertsContext;
