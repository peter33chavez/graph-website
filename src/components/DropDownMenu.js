import styled from "styled-components";
import Select from "react-select";

const DropDownMenu = ({ values, name, label, setOption, currentVal }) => {
  return (
    <OptionDropDown>
      <label htmlFor={name}>{label}</label>
      <Select
        options={values}
        defaultValue={currentVal}
        placeholder={currentVal}
        onChange={setOption}
      />
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
`;
