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
  let audio_1 = new Audio("/correct_choice.mp3");
  let audio_2 = new Audio("/wrong_choice.mp3");

  const correct_sound = () => {
    audio_1.play();
  };

  const wrong_sound = () => {
    audio_2.play();
  };

  const [answer1, setAnswer1] = useState(".....");
  const [answer2, setAnswer2] = useState(".....");
  const [answer3, setAnswer3] = useState(".....");
  const [answer4, setAnswer4] = useState(".....");
  return (
    <>
      <header className="title">
        <h1>รูปทรงสองมิติและสามมิติ</h1>
      </header>
      <section>
        <h2>1) รูปไหนคือรูปทรงกลม</h2>
        <div className="img-container">
          <button
            onClick={() => {
              wrong_sound();
              setAnswer1("👎");
            }}
          >
            <img src={circle_shape} width={300} height={300} />
          </button>
          <button
            onClick={() => {
              correct_sound();
              setAnswer1("👍");
            }}
          >
            <img src={circle_form} />
          </button>
          <p className="answer">{answer1}</p>
        </div>
        <h2>2) รูปไหนคือรูปสี่เหลี่ยมสองมิติ</h2>
        <div className="img-container">
          <button
            onClick={() => {
              wrong_sound();
              setAnswer2("👎");
            }}
          >
            <img src={square_form} />
          </button>
          <button
            onClick={() => {
              correct_sound();
              setAnswer2("👍");
            }}
          >
            <img src={square_shape} />
          </button>
          <p className="answer">{answer2}</p>
        </div>
      </section>
      <section>
        <h2>3) รูปไหนคือรูปทรงกล่องสี่เหลี่ยมผืนผ้า</h2>
        <div className="img-container">
          <button
            onClick={() => {
              wrong_sound();
              setAnswer3("👎");
            }}
          >
            <img src={rectangle_shape} />
          </button>
          <button
            onClick={() => {
              correct_sound();
              setAnswer3("👍");
            }}
          >
            <img src={rectangle_form} />
          </button>
          <p className="answer">{answer3}</p>
        </div>
        <h2>4) รูปไหนคือรูปทรงกรวย</h2>
        <div className="img-container">
          <button
            onClick={() => {
              correct_sound();
              setAnswer4("👍");
            }}
          >
            <img src={triangle_form} />
          </button>
          <button
            onClick={() => {
              wrong_sound();
              setAnswer4("👎");
            }}
          >
            <img src={triangle_shape} />
          </button>
          <p className="answer">{answer4}</p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
