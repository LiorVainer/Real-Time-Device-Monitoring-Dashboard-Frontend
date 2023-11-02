import { Graph } from "../../components/Graph";
import { useAlertsContext } from "../../contexts/alerts.context";
import classes from "./dashboard-page.module.scss";

export interface DashboardPageProps {}

export const DashboardPage = () => {
  const { alerts, ws } = useAlertsContext();
  return (
    <div className={classes.container}>
      <h1>Dashboard View</h1>
      <Graph />
      <footer>
        <div className={classes.serviceStatusContainer}>
          <h2>Service Status: </h2>
          <h2 className={ws ? classes.serviceUp : classes.serviceDown}>
            {ws ? "UP" : "DOWN"}
          </h2>
        </div>
        <h2>{alerts.length} Alerts</h2>
      </footer>
    </div>
  );
};
