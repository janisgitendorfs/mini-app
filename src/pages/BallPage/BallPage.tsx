import { useEffect, useRef } from 'react';
import type { FC } from 'react';

export const BallPage: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ball = useRef({
        x: 50,
        y: 50,
        radius: 15,
        dx: 2,
        dy: 2,
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;

        const width = canvas.width;
        const height = canvas.height;

        const draw = () => {
            context.clearRect(0, 0, width, height);

            // Draw the ball
            context.beginPath();
            context.arc(ball.current.x, ball.current.y, ball.current.radius, 0, Math.PI * 2);
            context.fillStyle = 'skyblue';
            context.fill();
            context.closePath();

            // Move the ball
            ball.current.x += ball.current.dx;
            ball.current.y += ball.current.dy;

            // Bounce off walls
            if (
                ball.current.x + ball.current.radius > width ||
                ball.current.x - ball.current.radius < 0
            ) {
                ball.current.dx *= -1;
            }
            if (
                ball.current.y + ball.current.radius > height ||
                ball.current.y - ball.current.radius < 0
            ) {
                ball.current.dy *= -1;
            }

            requestAnimationFrame(draw);
        };

        draw(); // Start animation
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={300}
            height={200}
            style={{ border: '1px solid black', display: 'block', margin: '0 auto' }}
        />
    );
};