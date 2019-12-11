import React from "react";
import "./ErrorIndicator.css";
import icon from './death-star.png'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom">ОШИБКА!</span>
      <span>Упс... что-то пошло нет так!</span>
      <span>(Но мы уже послали дронов для решения этой проблемы)</span>
    </div>
  );
};

export default ErrorIndicator;
