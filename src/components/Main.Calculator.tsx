import { useState } from 'react';
import Display from './Display';
import Evaluate from './Evaluate';
import './main.calculator.css';

type keys = number[] | string[]

const MainCalculator = () => {
  const numbers: keys = [7,8,9,4,5,6,1,2,3];
  const operators: keys = ['+','(','-',')','=','×','÷'];
  const [screen, setScreen] = useState<string>("0");

  const addKey = (key: string): void => {
    if(screen.length == 1 && screen == '0') {
      setScreen(key);
    }else {setScreen(screen + key)}
  }

  const removeKey = (): void  => {
    let temp: string[] = screen.split('');
    temp.pop();
    setScreen(temp.length == 0 ? '0' : temp.join(''));
  }

  const resetScreen = (): void => {
    setScreen("0");
  }

  const evaluate = (): void => {
    let expression: any = screen.split('').map((key) => {
      if(key == '×') return '*';
      if(key == '÷') return '/';
      return key;
    }).join('');

    setScreen(((): any=>{
      return Evaluate(expression);
    })());
  }

  return (
    <div className="calc">
      <div className="top-part">
        <a rel="noopener noreferrer">IzanamiiDevv</a>
        <div className="back-toppart"></div>
      </div>
      <Display display={screen}/>
      <div className="section one">
        <button className="key" onClick={() => {
          window.location.href = "https://github.com/IzanamiiDevv";
        }}>
          <div className="key_before">G</div>
        </button>
        <button className="key" onClick={()=> {
          window.location.href = "https://github.com/IzanamiiDevv/RPN-Calculator";
        }}>
          <div className="key_before">R</div>
        </button>
        <button className="key" onClick={() => removeKey()}>
          <div className="key_before">D</div>
        </button>
        <button className="key_red" onClick={() => resetScreen()}>
          <div className="key_before_red">Сх</div>
        </button>
      </div>
      <div className="section two">
        {numbers.map((key, index)=>{
          return <button className="key" onClick={ ()=> addKey(key.toString()) } key={index}>
            <div className="key_before">{key}</div>
          </button>
        })}
        <button className="key_long" onClick={ ()=> addKey('0') }>
          <div className="key_before_long">0</div>
        </button>
        <button className="key" onClick={() => {}}>
          <div className="key_before">,</div>
        </button>
      </div>
      <div className="section three">
        {operators.map((item , index) => {
          return (item == '=') ?
            <button key={index} className="key_vertical" onClick={() => evaluate()}>
              <div className="key_before_vertical">{item}</div>
            </button> 
            : <button key={index} className="key" onClick={() => addKey(item)}>
              <div className="key_before">{item}</div>
            </button>
        })}
      </div>
      <div className="btm-part"></div>
    </div>
  );
};

export default MainCalculator;