import { useState } from "react";

import styles from "./Dropdown.module.css";
import { TableTops } from "../ThinkingGames";

interface DropdownButtonProps {
  label: string
  default_open: boolean
}

export default function DropdownThinking({label = "Click me!", default_open = false}: DropdownButtonProps) {
  const [dropdownState, setDropdownState] = useState({ open: default_open});

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
