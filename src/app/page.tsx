"use client"

import { useState } from "react";
import Select from "./components/Select";

import styles from "./page.module.css";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState('');

  const options = [
  { label: 'option 1', value: 'account' },
  { label: 'option 2', value: 'wallet' },
  { label: 'option 3', value: 'bonuses' },
  { label: 'option 4', value: 'bets' },
  { label: 'option 5', value: 'history' },
];

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <main className={styles.main}>
      <Select options={options} onSelect={handleSelect} />
    </main>
  );
}
