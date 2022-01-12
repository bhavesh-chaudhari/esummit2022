import Card from "../contactTeam/Card";
import styles from "../../styles/Card.module.css";

const Department = ({ title }) => {
  return (
    <div className={styles["Dep_block"]}>
      <h2>{title}</h2>
      <div className={styles["Dep_Card"]}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default Department;
