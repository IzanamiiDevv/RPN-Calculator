import React, { useState, useEffect } from 'react';

const Calculator: React.FC = () => {
    const [position, setPosition] = useState({ x: (window.outerWidth / 2) - (380 / 2), y: 50 });
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

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
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: isDragging ? 'grabbing' : 'grab',
                width: '380px',
                height: '600px',
                backgroundColor: 'lightblue',
        }}>
            <h1>{`${position.x} ${position.y}`}</h1>
        </div>
    );
};

export default Calculator;