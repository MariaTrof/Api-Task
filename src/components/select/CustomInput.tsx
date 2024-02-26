import { useState } from "react";
import { ChangeEvent } from "react";

interface CustomInputProps {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (value: string) => void;
  placeholder: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  type,
  value,
  onChange,
  onSearch,
  placeholder,
}) => {
  const [searchValue, setSearchValue] = useState(value);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onChange(event);
  };
  const handleSearch = () => {
    onSearch(searchValue);
  };
  return (
    <div>
      <input
        type={type}
        value={searchValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
