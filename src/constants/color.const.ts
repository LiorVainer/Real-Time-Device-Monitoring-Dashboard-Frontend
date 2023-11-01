import { Importance } from "../models/alert.model";

export const GraphColumnColors = {
  [Importance.LOW]: "#96C291",
  [Importance.MEDIUM]: "#FFDBAA",
  [Importance.HIGH]: "#FFB7B7",
} as const;
