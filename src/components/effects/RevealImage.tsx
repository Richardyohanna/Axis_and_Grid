import {
useLayoutEffect,
useRef
} from "react";

import gsap from "../../animations/gsap";

interface Props{

children:React.ReactNode;

}

const RevealImage=({children}:Props)=>{

    const ref=useRef<HTMLDivElement>(null);

    useLayoutEffect(()=>{

    gsap.fromTo(

        ref.current,
        {
            clipPath:"inset(100% 0% 0% 0%)"

        },

        {

            clipPath:"inset(0% 0% 0% 0%)",

            duration:1.3,

            ease:"power3.out",

            scrollTrigger:{

            trigger:ref.current,

            start:"top 80%"

            }

        }

    );

    },[]);

    return(

        <div
            ref={ref}
            className="overflow-hidden"

        >
            {children}
        </div>

    );

};

export default RevealImage;