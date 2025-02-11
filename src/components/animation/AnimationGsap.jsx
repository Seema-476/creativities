import { useEffect ,useRef} from "react";
import { gsap } from "gsap";

const AnimationGsap = () => {
const buttonRef = useRef(null);
const textRef = useRef(null);
useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      ".hero",
      {scale: 0,},{scale: 1,delay: .7,duration: 1,stagger: 0.5,}
    );
  });
  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;

    if (button && text) {
      button.addEventListener("mouseenter", () => {
        gsap.fromTo(
          text,
          { y: 30, opacity: 0 }, 
          { y: 0, opacity: 1, delay: .9, duration:0.5, ease: "power3.out" }
        );
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen flex-col bg-slate-300">
        <h2 className="text-3xl text-white font-bold underline hero">GSAP</h2>
        <p className="font-medium text-xl text-white max-w-[500px] w-full text-center py-8 hero">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nemo, dolorem consequuntur, possimus asperiores ea quibusdam ipsam temporibus sunt vero sed laborum libero aut veritatis perspiciatis dolorum cum assumenda voluptas.</p>
<button
        ref={buttonRef}
        className="text-2xl font-bold bg-blue-400 rounded-lg px-5 py-2 text-black duration-300 hover:text-white hover:bg-blue-500 relative overflow-hidden hero"
      >
        <span ref={textRef} className="block">
        Button
        </span>
      </button>
    </div>
  );
};
export default AnimationGsap