function Select({ options, handleChange, label, color }: SelectProps) {
    return (
        <div className="flex flex-row gap-2 items-center">
            <label style={{ color }} className="text-sm">
                {label}:
            </label>
            <select
                className="p-1 text-sm font-medium outline-none capitalize rounded-lg shadow-lg"
                onChange={handleChange}>
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
    color?: string;
};
