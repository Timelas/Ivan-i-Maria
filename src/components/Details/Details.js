import React from "react";
import Title from "../Title/Title";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <Title title={"Детали"}/>
      <div className="details__stone"></div>
      <div className="details__stone2"></div>
      <p className="details__text">Мы будем рады, если вместо цветов Вы купите корм для животных в приют, пусть этот день внесет небольшой вклад для братьев наших меньших.</p>
      <div className="details__line"></div>
      <p className="details__text">По всем вопросам дня вам поможет наш свадебный координатор Александра:&#8239;+7&#8239;915&#8239;300‑51‑56.</p>
    </section>
  );
}

export default Details;