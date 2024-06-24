import React, { useState, useEffect } from 'react';
import { TOffset, TPosition } from './Types';
import Evaluate from './components/Evaluate';
import Display from './components/Display';
import './calculator.css';

const Calculator: React.FC = () => {
    const [position, setPosition] = useState<TPosition>({ x: (window.outerWidth / 2) - (380 / 2), y: 50 });
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [offset, setOffset] = useState<TOffset>({ x: 0, y: 0 });
    const [expresson, setExpression] = useState<string>('(380 / 2) + 20 * 3');

    useEffect(() => {

        const handleMouseMove = (event: MouseEvent) => {
            if (isDragging) {
                setPosition({
                    x: event.clientX - offset.x,
                    y: event.clientY - offset.y,
                });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('keydown', (e)=> {
            if(e.key == 'r') 
                setPosition({ x: (window.outerWidth / 2) - (380 / 2), y: 50 });
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, offset]);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setOffset({
            x: event.clientX - position.x,
            y: event.clientY - position.y,
        });
    };

    return (
        <div onMouseDown={handleMouseDown} style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: isDragging ? 'grabbing' : 'grab',
                width: '380px',
                height: '600px',
        }} className='calculator'>
            <Display display={Evaluate(expresson).toString()}/>
            <input type="text" onChange={(e)=>{
                setExpression(e.target.value);
            }} value={expresson}/>
        </div>
    );
};

export default Calculator;