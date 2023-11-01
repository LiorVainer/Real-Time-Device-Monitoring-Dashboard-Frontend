import { Graph } from "../../components/Graph";
import classes from "./dashboard-page.module.scss";

export interface DashboardPageProps {}

export const DashboardPage = (props: DashboardPageProps) => {
  return (
    <div className={classes.container}>
      <h1>Dashboard View</h1>
      <Graph />
    </div>
  );
};
