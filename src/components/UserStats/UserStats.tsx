import { FC } from "react";

interface IUserStats {
  number?: number;
  label: string;
}

export const UserStats: FC<IUserStats> = ({ number, label }) => (
  <div className="statsContainer">
    <div className="statsContainer__number">{number}</div>
    <div className="statsContainer__label">{label}</div>
  </div>
);
