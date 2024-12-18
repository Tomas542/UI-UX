import styles from './TabelCell.module.css';

interface TableCellProps {
  name: string;
  description: string;
  img_src: string;
}

export const TableCell = ({ name, description, img_src }: TableCellProps) => {
  return (
    <li className={styles.tableCellContainer}>
      <div style={{
        display: "block"
      }}>
        <div style={{
          display: "table-cell",
          height: "100%",
          marginLeft: "0px",
          marginRight: "0px",
          boxSizing: "content-box"
        }}>
          <img src={img_src}alt=""></img>
        </div>
        <div style={{
          paddingLeft: "20px",
          display: "table-cell",
          width: "100%",
          height: "100%",
          verticalAlign: "top",
        }}>
          <div style={{
            display: "block",
            fontSize: "20px",
            fontWeight: 600,
          }}>
            {name}
          </div>
          <div style={{
            display: "block"
          }}>
            {description}
          </div>
        </div>
      </div>
    </li>
  );
};
