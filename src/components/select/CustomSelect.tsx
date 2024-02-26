interface Option {
  name: string;
  value: string;
}

export const CustomSelect = ({
  options,
  defaultValue,
  onChange,
  value,
}: {
  options: Option[];
  defaultValue: string;
  onChange: (value: string) => void;
  value: string;
}) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option, index) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
