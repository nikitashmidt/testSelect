"use client"

import { useEffect, useRef, useState } from "react";
import cn from "classnames";

import styles from "./select.module.css"

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: Option[];
  onSelect: (value: string) => void;
};

const Select = ({ options, onSelect }: CustomSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSelectChange = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (isOpen) {
          setIsOpen(false);
        }
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className={styles.customSelect} ref={ref}>
      <div
        className={styles.selectedOption}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption?.value ?? options[0].value}
      </div>
        <ul className={cn(styles.optionsList, isOpen && styles.optionList_active)}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelectChange(option)}
            >
              {option.value}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Select;