import React from "react";
import {
  Calendar,
  FirstContent,
  ReportContent,
  ReportText,
  LastContent,
  BlockButtons,
  CheckButton,
  CloseButton,
} from "../style/style";
import "../style/report.css";

import check from "shared/assets/svg/check.svg";
import close from "shared/assets/svg/close.svg";

const ReportList: React.FC = () => {
  return (
    <ReportContent>
      <FirstContent>
        <ReportText>Отчеты</ReportText>
        <Calendar>
          <input className="date" min="2024-07-01" type="date" />
        </Calendar>
      </FirstContent>
      <LastContent>
        <table>
          <tr>
            <th>Студент</th>
            <th>Направление</th>
            <th>Задание</th>
            <th>Статус</th>
            <th></th>
          </tr>
          <tr>
            <td>Asanov Asan</td>
            <td>JavaScripr</td>
            <td>
              <select>
                <option>Seminar</option>
                <option>Article</option>
                <option>Leetcode</option>
              </select>
            </td>
            <td>
              <select>
                <option>Не выполнено</option>
                <option>Выполнено</option>
                <option>На процессе</option>
              </select>
            </td>
            <td>
              <BlockButtons>
                <CheckButton>
                  <img src={check} alt="check image" />
                </CheckButton>
                <CloseButton>
                  <img src={close} alt="close image" />
                </CloseButton>
              </BlockButtons>
            </td>
          </tr>
          <tr>
            <td>Michael Jordan</td>
            <td>Java</td>
            <td>
              <select>
                <option>Seminar</option>
                <option>Article</option>
                <option>Leetcode</option>
              </select>
            </td>
            <td>
              <select>
                <option>Не выполнено</option>
                <option>Выполнено</option>
                <option>На процессе</option>
              </select>
            </td>
            <td>
              <BlockButtons>
                <CheckButton>
                  <img src={check} alt="check image" />
                </CheckButton>
                <CloseButton>
                  <img src={close} alt="close image" />
                </CloseButton>
              </BlockButtons>
            </td>
          </tr>
        </table>
      </LastContent>
    </ReportContent>
  );
};

export default ReportList;
