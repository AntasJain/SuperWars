import { Table } from "react-bootstrap";
import "./StatsTable.css"; // Optional: if you want to move CSS to a separate file

const StatsTable = ({ powerstats }) => {
  return (
    <Table className="transparent-table">
      <tbody>
        {Object.entries(powerstats).map(([key, value]) => (
          <tr key={key} className="transparent-row">
            <td className="text-start p-2 m-1 transparent-cell">
              {key.toUpperCase()}
            </td>
            <td className="p-2 transparent-cell">{value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StatsTable;
