import { useState } from "react";

import styles from "./Dropdown.module.css";
import { TableTops } from "../tableGames";

interface DropdownButtonProps {
  label: string
}

export default function Dropdown({label = "Click me!"}: DropdownButtonProps) {
  const [dropdownState, setDropdownState] = useState({ open: false});

  const handleDropdownClick = () => {
    setDropdownState({ open: !dropdownState.open});
  }

return (
  <div className={styles.container}>
    <button
      type="button"
      className={styles.button}
      onClick={handleDropdownClick}
      >
      {label} {dropdownState.open ? "🡣" : "🡢"}
    </button>
  {dropdownState.open && (
    <div className={styles.dropdown}>
      <TableTops />
    </div>
  )}
  </div>
  );
}
