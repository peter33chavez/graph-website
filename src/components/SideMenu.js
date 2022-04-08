import styled from "styled-components";
import {
  AiOutlineLineChart,
  AiOutlineBarChart,
  AiOutlinePieChart,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

const SideMenu = ({ setChart, chart }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Menu>
      {showMenu ? (
        <ChartList onMouseLeave={() => setShowMenu(false)}>
          <li>
            <button onClick={() => chart !== "line" && setChart("line")}>
              <AiOutlineLineChart size={40} />
            </button>
          </li>
          <li>
            <button onClick={() => chart !== "bar" && setChart("bar")}>
              <AiOutlineBarChart size={40} />
            </button>
          </li>
          <li>
            <button onClick={() => chart !== "pie" && setChart("pie")}>
              <AiOutlinePieChart size={40} />
            </button>
          </li>
        </ChartList>
      ) : (
        <ClosedMenu>
          <button onMouseEnter={() => setShowMenu(true)}>
            <BsThreeDotsVertical size={40} />
          </button>
        </ClosedMenu>
      )}
    </Menu>
  );
};

export default SideMenu;

const Menu = styled.div`
  position: sticky;
  top: 40vh;
  float: left;
  height: 0;
  width: 0;
`;
const ChartList = styled.ul`
  background: rgba(0, 14, 43, 1) 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 70px;
  border-radius: 0 10px 10px 0;
  li {
    padding: 10px;
    button {
      cursor: pointer;
      background: none;
      border: none;
      color: white;
    }
  }
`;

const ClosedMenu = styled.div`
  background: rgba(0, 14, 43, 1) 100%;
  width: 2em;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  button {
    background: none;
    border: none;
    color: white;
    padding: 0;
    cursor: pointer;
  }
`;
