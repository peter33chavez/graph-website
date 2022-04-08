import styled from "styled-components";
import DropDownMenu from "./DropDownMenu";
import {
  refreshOptions,
  timePeriodOptions,
  apiTargetOptions,
} from "../helpers/ApiFilterOptions";

const FilterOptions = ({
  setRefreshRate,
  refreshRate,
  setDataTimePeriod,
  dataTimePeriod,
  setCurrentTarget,
  currentTarget,
}) => {
  return (
    <DropDownContainer>
      <TargetContainer>
        <DropDownMenu
          values={apiTargetOptions.options}
          name={apiTargetOptions.name}
          label={apiTargetOptions.label}
          setOption={setCurrentTarget}
          currentVal={currentTarget}
        />
      </TargetContainer>
      <DataFilterContainer>
        <DropDownMenu
          values={refreshOptions.options}
          name={refreshOptions.name}
          label={refreshOptions.label}
          setOption={setRefreshRate}
          currentVal={refreshRate}
        />
        <DropDownMenu
          values={timePeriodOptions.options}
          name={timePeriodOptions.name}
          label={timePeriodOptions.label}
          setOption={setDataTimePeriod}
          currentVal={dataTimePeriod}
        />
      </DataFilterContainer>
    </DropDownContainer>
  );
};

export default FilterOptions;

const DropDownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em;
`;

const TargetContainer = styled.div``;
const DataFilterContainer = styled.div`
  display: flex;
  gap: 1em;
`;
