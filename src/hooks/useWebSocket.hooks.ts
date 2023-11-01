import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  ALERT_WS_TYPE,
  Alert,
  Importance,
  WsAlert,
} from "../models/alert.model";

export const useWebSocket = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(`ws://${import.meta.env.VITE_API_LOCATION}`);

    socket.onopen = () => {
      console.log("Connected to the WebSocket server");
      setWs(socket);
    };

    socket.onmessage = (event) => {
      const message: WsAlert = JSON.parse(event.data);
      if (message.type === ALERT_WS_TYPE) {
        const newAlert = message.data;
        if (newAlert.importance === Importance.HIGH) {
          Swal.fire({
            icon: "warning",
            title: `High Importance Alert! - ${newAlert.title}`,
            text: `${newAlert.description}`,
            timer: 2000,
            position: "bottom-end",
            showConfirmButton: false,
          });
        }
        setAlerts((prevMessages) => [...prevMessages, newAlert]);
      }
    };

    socket.onclose = () => {
      console.log("Disconnected from the WebSocket server");
      setWs(null);
    };

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []); // Runs only once on component mount

  return { alerts, ws };
};
