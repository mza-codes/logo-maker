function Select({ options, handleChange, label }: SelectProps) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <label className="text-sm text-white">{label}:</label>
      <select
        className="p-1 text-sm font-medium outline-none capitalize rounded-lg shadow-lg"
        onChange={handleChange}
      >
        {options.map((val: string) => (
          <option className="capitalize" value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

type SelectProps = {
  options: string[];
  label: string;
  handleChange: (e: any) => void;
};
