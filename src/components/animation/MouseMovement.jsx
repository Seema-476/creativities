import { useState, useEffect } from "react"
import Heading from "../../common/Heading";

const MouseMovement = () => {
    const [bubbleColor, setBubbleColor] = useState("#000000");
    const createBubble = (x, y) => {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${x - 25}px`;
        bubble.style.top = `${y - 25}px`;
        bubble.style.backgroundColor = bubbleColor;

        document.body.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 3000);
    };

    useEffect(() => {
        const handleTouchMove = (event) => {
            event.preventDefault();
            const touch = event.touches[0];
            createBubble(touch.pageX, touch.pageY);
        };

        const handleMouseMove = (event) => {
            createBubble(event.pageX, event.pageY);
        };

        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [bubbleColor]);
    const handleColorChange = (event) => {
        setBubbleColor(event.target.value);
    };
    return (
        <div className="flex items-center justify-center h-screen w-full">
           <div className="container">
           <Heading text="MOVE THE MOUSE"/>
            <input
                type="color"
                className="z-[9999] absolute bottom-4 left-4 border-4 border-black bg-black h-8 w-8 rounded-lg"
                onChange={handleColorChange} />
           </div>
        </div>
    )
}

export default MouseMovement
