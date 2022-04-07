import styled from "styled-components";

const DropDownMenu = ({ values, name, label, setOption }) => {
  const changeData = (e) => {
    setOption(e.target.value);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={(e) => changeData(e)}>
        {values.map((option) => (
          <option key={option.title} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownMenu;
