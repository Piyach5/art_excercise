import circle_shape from "../assets/2d/circle_shape.png";
import circle_form from "../assets/3d/circle_form.png";
import square_shape from "../assets/2d/square_shape.png";
import square_form from "../assets/3d/square_form.png";
import rectangle_shape from "../assets/2d/rectangle_shape.png";
import rectangle_form from "../assets/3d/rectangle_form.png";
import triangle_shape from "../assets/2d/triangle_shape.png";
import triangle_form from "../assets/3d/triangle_form.png";
import { useState } from "react";

function HomePage() {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  return (
    <>
      <header className="title">
        <h1>รูปภาพไหนคือภาพสามมิติ</h1>
      </header>
      <div className="img-container">
        <button
          onClick={() => {
            setAnswer1("👎");
          }}
        >
          <img src={circle_shape} width={300} height={300} />
        </button>
        <button
          onClick={() => {
            setAnswer1("👍");
          }}
        >
          <img src={circle_form} width={300} height={300} />
        </button>
        <h2 className="answer">{answer1}</h2>
      </div>
      <div className="img-container">
        <button
          onClick={() => {
            setAnswer2("👍");
          }}
        >
          <img src={square_form} width={300} height={300} />
        </button>
        <button
          onClick={() => {
            setAnswer2("👎");
          }}
        >
          <img src={square_shape} width={300} height={300} />
        </button>
        <h2 className="answer">{answer2}</h2>
      </div>
      <div className="img-container">
        <button
          onClick={() => {
            setAnswer3("👎");
          }}
        >
          <img src={rectangle_shape} width={300} height={300} />
        </button>
        <button
          onClick={() => {
            setAnswer3("👍");
          }}
        >
          <img src={rectangle_form} width={300} height={300} />
        </button>
        <h2 className="answer">{answer3}</h2>
      </div>
      <div className="img-container">
        <button
          onClick={() => {
            setAnswer4("👍");
          }}
        >
          <img src={triangle_form} width={300} height={300} />
        </button>
        <button
          onClick={() => {
            setAnswer4("👎");
          }}
        >
          <img src={triangle_shape} width={300} height={300} />
        </button>
        <h2 className="answer">{answer4}</h2>
      </div>
    </>
  );
}

export default HomePage;
