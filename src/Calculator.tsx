import React, { useState, useEffect } from 'react';
import { TOffset, TPosition } from './Types';
import MainCalculator from './components/Main.Calculator';

const Calculator: React.FC = () => {
    const [position, setPosition] = useState<TPosition>({ x: (window.outerWidth / 2) - (380 / 2), y: 125 });
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [offset, setOffset] = useState<TOffset>({ x: 0, y: 0 });

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
                setPosition({ x: (window.outerWidth / 2) - (380 / 2), y: 125 });
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
                height: '500px',
                position: "absolute",
        }} className='calculator'>
            <MainCalculator/>
        </div>
    );
};

export default Calculator;