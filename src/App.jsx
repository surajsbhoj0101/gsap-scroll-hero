import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useEffect } from "react";
import mlImg from "./assets/Ml.png";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const blackRef = useRef(null);
  const upperFirstStatRef = useRef(null);
  const upperSecondStatRef = useRef(null);

  const lowerFirstStatRef = useRef(null);
  const lowerSecondStatRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculate responsive animation values based on screen width
      const vw = window.innerWidth;
      const startX = vw < 640 ? 60 : vw < 1024 ? 150 : 270;
      const endX = vw < 640 ? 420 : vw < 1024 ? 600 : 1470;

      // Set initial states
      gsap.set(
        [
          upperFirstStatRef.current,
          upperSecondStatRef.current,
          lowerFirstStatRef.current,
          lowerSecondStatRef.current,
        ],
        { opacity: 0, y: 20 }
      );

      //Initial hero animation
      gsap.fromTo(
        heroRef.current,
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
        })
      // Black box scroll animation
      gsap.fromTo(
        blackRef.current,
        {
          x: startX, // responsive start
        },
        {
          x: endX, // responsive end
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,

          },
        }
      );

      const statsTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          markers: true
        },
      });

      statsTl
        .to(upperFirstStatRef.current, { opacity: 1, y: 0 })
        .to(upperSecondStatRef.current, { opacity: 1, y: 0 })
        .to(lowerFirstStatRef.current, { opacity: 1, y: 0 })
        .to(lowerSecondStatRef.current, { opacity: 1, y: 0 });
    }, containerRef); // scope

    return () => ctx.revert();

  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col relative h-[300vh] items-center justify-center text-center"
    >

      {/* Spacer */}
      <div  className="h-[30vh] sm:h-[35vh] md:h-[40vh] fixed top-[3vh] sm:top-[4vh] md:top-[5vh] w-[95%] sm:w-full px-2 sm:px-0">
        <div

          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto"
        >
          {/* Card 1 */}
          <div ref={upperFirstStatRef} className="flex-1 bg-yellow-300 rounded-lg p-2 sm:p-3 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
              58%
            </h2>

            <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-black font-medium">
              Increase in pick up point use
            </p>
          </div>

          {/* Card 2 */}
          <div ref={upperSecondStatRef} className="flex-1 bg-black rounded-lg p-2 sm:p-3 text-left border border-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
              23%
            </h2>

            <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white font-medium">
              Successful deliveries this month
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="bg-[#45db7d] fixed top-1/2 -translate-y-1/2 flex items-center justify-center h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[35vh] w-full overflow-hidden"
      >

        {/* Big Text */}
        <div className="w-[800px] sm:w-[1200px] md:w-[2000px] lg:w-[3400px] flex items-center justify-center h-[18vh] sm:h-[23vh] md:h-[28vh] lg:h-[30vh]">
          <h1
            ref={titleRef}
            className="font-mono text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold whitespace-nowrap"
          >
            WELCOME ITZFIZZ
          </h1>
        </div>

        {/* Black Box */}
        <div
          ref={blackRef}
          className="bg-black p-1 sm:p-2 flex items-center absolute top-1/2 -translate-y-1/2 h-full w-[120vw] z-[999]"
        >
          <img src={mlImg} alt="Itzfizz Logo" className="absolute left-[-30px] sm:left-[-40px] md:left-[-50px] h-full object-contain" />
        </div>

      </div>

      {/* Spacer */}
      <div  className="h-[30vh] sm:h-[35vh] md:h-[40vh] fixed top-[60vh] sm:top-[65vh] md:top-[70vh] left-1/2 -translate-x-1/2 w-[95%] sm:w-full px-2 sm:px-0">
        <div

          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto"
        >
          {/* Card 1 */}
          <div ref={lowerFirstStatRef} className="flex-1 bg-blue-500 rounded-lg p-2 sm:p-3 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
              58%
            </h2>

            <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-black font-medium">
              Increase in pick up point use
            </p>
          </div>

          {/* Card 2 */}
          <div ref={lowerSecondStatRef} className="flex-1 bg-orange-500 rounded-lg p-2 sm:p-3 text-left border border-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
              23%
            </h2>

            <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-black font-medium">
              Successful deliveries this month
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;