import styled from "styled-components";

const DropDownMenu = ({ values, name, label, setOption }) => {
  const changeData = (e) => {
    setOption(values[+e.target.value]);
  };

  return (
    <OptionDropDown>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={(e) => changeData(e)}>
        {values.map((option, idx) => (
          <option key={option.title} value={idx}>
            {option.title}
          </option>
        ))}
      </select>
    </OptionDropDown>
  );
};

export default DropDownMenu;

const OptionDropDown = styled.div`
  display: flex;
  margin: 1em 0;
  label {
    display: flex;
    color: #b8b8b8;
    font-size: 14px;
    align-items: center;
    padding-right: 5px;
  }
  select {
    background: rgba(0, 0, 0, 0) 50%;
    color: white;
    outline: none;
    padding: 0.3em;
  }
`;
