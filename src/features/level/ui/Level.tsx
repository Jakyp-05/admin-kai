import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllLevels } from "../store/actions";
import { AppDispatch } from "app/store";
import { selectLevel } from "../store/selector";
import deleteSvg from "shared/assets/svg/delete.svg";
import editSvg from "shared/assets/svg/edit.svg";
import documentSvg from "shared/assets/svg/document.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LevelContainer, SliderContainer, LevelLevels, LevelStudents, LevelHead, LevelBody, Icons } from './styles';
import Slider from "react-slick";

const Level: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const levels = useSelector(selectLevel);

  useEffect(() => {
    dispatch(getAllLevels());
  }, [levels]);

  useEffect(() => {
    console.log(levels)
  }, []);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <LevelContainer>
      <SliderContainer>
        <Slider {...settings}>
          <LevelLevels>
            <LevelHead>
              <h2>
                Уровень
              </h2>
            </LevelHead>
            <LevelBody>
              {
                levels &&
                <table>
                  <thead>
                    <tr>
                      <th>Уровень</th>
                      <th>Описание</th>
                      <th>Баллы</th>
                      <th>Действие</th>
                    </tr>
                  </thead>
                  <tbody>
                    {levels.map(el => {
                      return (
                        <tr>
                          <td>{el.title}</td>
                          <td>
                            <ul>
                              {el.description.split(".").map((elem, index) => {
                                return (
                                  <li>{elem.length > 35 ? `${elem.slice(0, 35)}...` : elem}</li>
                                )
                              })}
                            </ul>
                          </td>
                          <td>{`${el.pointFrom}-${el.pointTo}`}</td>
                          <td>
                            <Icons >
                              <span>
                                <img src={deleteSvg} alt="delete icon" />
                              </span>
                              <span>
                                <img src={editSvg} alt="edit icon" />
                              </span>
                            </Icons>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              }
            </LevelBody>
          </LevelLevels>
          <LevelStudents>
            <LevelHead>
              <h2>
                Стажёры
              </h2>
              <img src={documentSvg} alt="" />
            </LevelHead>
            <LevelBody>
              <table>
                <thead>
                  <tr>
                    <th>Имя</th>
                    <th>Направления</th>
                    <th>Баллы</th>
                    <th>Действия</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <p>

                      </p>
                    </td>
                    <td></td>
                    <td>
                      <Icons >
                        <span>
                          <img src={deleteSvg} alt="delete icon" />
                        </span>
                      </Icons>
                    </td>
                  </tr>
                </tbody>
              </table>
            </LevelBody>
          </LevelStudents>
        </Slider>
      </SliderContainer>
    </LevelContainer>
  )
}

export default Level
