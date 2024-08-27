import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './field.css';

export default function PlayGround() {
    const location = useLocation();
    const { element } = location.state || { element: 'Fire' };

    const elementColors = {
        Fire: 'red',
        Water: 'blue',
        Earth: 'brown',
        Wind: 'lightgray',
        Ice: 'cyan',
        Lightning: 'yellow'
    };

    const circleColor = elementColors[element] || 'black';
    const canvasRef = useRef(null);
    const [visibleSpheres, setVisibleSpheres] = useState(0);
    const colorSpheres = elementColors[element] || 'black';

    useEffect(() => {
        const c = canvasRef.current;
        const ctx = c.getContext("2d");

        const resizeCanvas = () => {
            c.width = window.innerWidth;
            c.height = window.innerHeight * 0.5;
            drawShapes();
        };

        const clearCanvas = () => {
            ctx.clearRect(0, 0, c.width, c.height);
        };

        const drawHealthBar = (x, y, width, height, health) => {
            ctx.fillStyle = 'red';
            ctx.fillRect(x, y - 20, width, height);
            ctx.fillStyle = 'green';
            ctx.fillRect(x, y - 20, width * health / 100, height);
            ctx.fillStyle = 'black';
            ctx.font = '12px Arial';
            ctx.fillText(`${health} HP`, x + width / 2 - 15, y - 25);
        };

        const drawMage = (x, y, radius, color, health, numSpheres) => {
            const smallCircleRadius = 10;
            const radiusOffset = radius + smallCircleRadius * 2;
            const angleStep = Math.PI / (numSpheres - 1);

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.stroke();

            let highestY = y;
            for (let i = 0; i < numSpheres; i++) {
                const angle = -Math.PI / 2 + (i - (numSpheres - 1) / 2) * angleStep;
                const sx = x + radiusOffset * Math.cos(angle);
                const sy = y + radiusOffset * Math.sin(angle);
                if (angle >= -Math.PI && angle <= 0) {
                    ctx.beginPath();
                    ctx.arc(sx, sy, smallCircleRadius, 0, 2 * Math.PI);
                    ctx.stroke();
                    if (sy < highestY) highestY = sy;
                }
            }
            drawHealthBar(x - radius, highestY - 30, radius * 2, 10, health);
        };

        const drawEnemy = (x, y, width, height, health) => {
            const smallCircleRadius = 10;
            const numSpheres = 10;
            const radiusOffset = width / 2 + smallCircleRadius * 2;
            const angleStep = Math.PI / (numSpheres - 1);

            ctx.beginPath();
            ctx.rect(x, y, width, height);
            ctx.stroke();

            let highestY = y;
            for (let i = 0; i < numSpheres; i++) {
                const angle = -Math.PI / 2 + (i - (numSpheres - 1) / 2) * angleStep;
                const sx = x + width / 2 + radiusOffset * Math.cos(angle);
                const sy = y + radiusOffset * Math.sin(angle);
                if (angle >= -Math.PI && angle <= 0) {
                    ctx.beginPath();
                    ctx.arc(sx, sy, smallCircleRadius, 0, 2 * Math.PI);
                    ctx.stroke();
                    if (sy < highestY) highestY = sy;
                }
            }
            drawHealthBar(x, highestY - 30, width, 10, health);
        };

        const drawShapes = () => {
            clearCanvas();

            const paddingWidthVH = 10;
            const paddingHeightVH = 5;
            const paddingWidth = window.innerHeight * (paddingWidthVH / 100);
            const paddingHeight = window.innerHeight * (paddingHeightVH / 100);

            const circleRadius = 40;
            const rectWidth = 100;
            const rectHeight = 50;

            drawMage(paddingWidth + circleRadius, c.height - paddingHeight - circleRadius, circleRadius, circleColor, 70, visibleSpheres);
            drawEnemy(c.width - rectWidth - paddingWidth, c.height - rectHeight - paddingHeight, rectWidth, rectHeight, 50);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [circleColor, visibleSpheres]);

    const handleButtonClick = () => {
        setVisibleSpheres(prev => Math.min(prev + 1, 10));
    };

    return (
        <div>
            <canvas
                ref={canvasRef}
                id='screen'
                style={{
                    width: 'calc(100vw - 3%)',
                    height: 'calc(50vh)',
                    border: '1px solid white'
                }}
            ></canvas>
            <button onClick={handleButtonClick}>Add Sphere</button>
        </div>
    );
}
