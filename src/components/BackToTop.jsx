import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

function BackToTop() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${showTopButton ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ChevronUp />
    </button>
  );
}

export default BackToTop;