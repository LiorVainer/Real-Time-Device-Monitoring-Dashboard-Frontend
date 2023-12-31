import { Bar } from "@nivo/bar";
import { useAlertsContext } from "../../contexts/alerts.context";
import { getColumnColorBasedOnAlert } from "../../utils/alert.utils";
import classes from "./graph.module.scss";

export interface GraphProps {}

export const Graph = () => {
  const { alerts } = useAlertsContext();

  // Data transformation: Extracting 'level' from alerts
  const chartData = alerts.slice(-20).map((alert) => ({
    level: alert.level,
    createdAt: new Date(alert.createdAt).toLocaleString("he-IL", {
      timeStyle: "medium",
    }),
    importance: alert.importance,
  }));

  return (
    <div className={classes.container}>
      <Bar
        height={600}
        width={1800}
        indexBy={"createdAt"}
        data={chartData}
        keys={["level"]}
        margin={{ top: 2, right: 2, bottom: 60, left: 60 }}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors={getColumnColorBasedOnAlert}
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickRotation: -90,
        }}
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
