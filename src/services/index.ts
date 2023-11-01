export const socket = new WebSocket(`ws://${import.meta.env.VITE_API_LOCATION}`);
socket.onopen = () => {
  console.log("Connected to the WebSocket server");
};

socket.onclose = () => {
  console.log("Disconnected from the WebSocket server");
};

