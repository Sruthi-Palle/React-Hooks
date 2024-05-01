import { UseLocalStorage } from "../CustomHooks/UseLocalStorage";

export const HandleLocalStorage = () => {
  const [value, updateValue, clearValue] = UseLocalStorage("name", "");

  const handleChange = (event) => {
    updateValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={clearValue}>Clear Name</button>
    </div>
  );
};
