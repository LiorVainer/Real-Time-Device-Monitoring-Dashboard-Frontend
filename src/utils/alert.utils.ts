import { GraphColumnColors } from "../constants/color.const";
import { Alert } from "../models/alert.model";

export const getColumnColorBasedOnAlert = (data: {
  data: Pick<Alert, "createdAt" | "importance" | "level">;
}) => GraphColumnColors[data.data.importance];
