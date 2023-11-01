import { ResponsiveBar } from "@nivo/bar";
import { useWebSocket } from "../../hooks/useWebSocket.hooks";
import classes from "./graph.module.scss";

export interface GraphProps {}

export const Graph = (props: GraphProps) => {
  const { alerts } = useWebSocket();

  // Data transformation: Extracting 'level' from alerts
  const chartData = alerts.map((alert) => ({
    level: alert.level,
    createdAt: new Date(alert.createdAt).toLocaleString("he-IL", {
      timeStyle: "medium",
    }),
  }));

  // Chart properties
  const chartProperties = {
    width: 600,
    height: 400,
    data: chartData,
    keys: ["level"],
    indexBy: "level",
    padding: 0.3,
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Level",
      legendPosition: "middle",
      legendOffset: 36,
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Count",
      legendPosition: "middle",
      legendOffset: -40,
    },
  } as const;

  console.log("chartData", chartData);

  return (
    <div className={classes.container}>
      <h1>Graph</h1>
      <ResponsiveBar
        indexBy={"createdAt"}
        data={chartData}
        keys={["level"]}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors="#3182CE"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "level",
          legendPosition: "middle",
          legendOffset: -40,
        }}
      />
    </div>
  );
};
