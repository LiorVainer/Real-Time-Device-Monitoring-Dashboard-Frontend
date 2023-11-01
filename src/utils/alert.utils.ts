import { Alert, Importance } from "../models/alert.model";

export const getColumnColorBasedOnAlert = (data: {
  data: Pick<Alert, "createdAt" | "importance" | "level">;
}) => {
  switch (data.data.importance) {
    case Importance.LOW:
      return "green"; // Set color to green for low importance
    case Importance.MEDIUM:
      return "orange"; // Set color to orange for medium importance
    case Importance.HIGH:
      return "red"; // Set color to red for high importance
  }
};
