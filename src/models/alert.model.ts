export const Importance = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
} as const;

export interface Alert {
  importance: "low" | "medium" | "high";
  title: string;
  description: string;
  type: "alert";
  createdAt: string;
  level: number;
}

export const ALERT_WS_TYPE = "alert";

export interface WsAlert {
  type: string;
  data: Alert;
}
