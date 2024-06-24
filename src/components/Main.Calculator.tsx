import './main.calculator.css';

const MainCalculator = () => {

  return (
    <div className="calc">
      <div className="top-part">
        <a rel="noopener noreferrer">Calculator</a>
        <div className="back-toppart"></div>
      </div>
      <div className="window">
        <div className="result">
          <input className="readout" readOnly disabled value={"Test"} />
          <input className="placehold" readOnly disabled placeholder="888888888888888" />
        </div>
        <div className="plane"></div>
      </div>
      <div className="section one">
        <button className="key" onClick={() => {}}><div className="key_before">СП</div></button>
        <button className="key"><div className="key_before">П+</div></button>
        <button className="key"><div className="key_before">ИП</div></button>
        <button className="key_red" onClick={() => {}}><div className="key_before_red">Сх</div></button>
      </div>
      <div className="section two">
        <button className="key" onClick={() => {}}><div className="key_before">7</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">8</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">9</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">4</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">5</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">6</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">1</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">2</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">3</div></button>
        <button className="key_long" onClick={() => {}}><div className="key_before_long">0</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">,</div></button>
      </div>
      <div className="section three">
        <button className="key" onClick={() => {}}><div className="key_before">+</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">%</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">-</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">/-/</div></button>
        <button className="key_vertical" onClick={() => {}}><div className="key_before_vertical">=</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">×</div></button>
        <button className="key" onClick={() => {}}><div className="key_before">÷</div></button>
      </div>
      <div className="btm-part"></div>
    </div>
  );
};

export default MainCalculator;