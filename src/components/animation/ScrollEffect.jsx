import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ScrollEffect = ({
  children,
  properties = {},
  inViewProperties = {},
  inViewTransitionTime = 0.4,
  inViewDelay = 0,
  runOnce = false,
}) => {
  const nodeRef = useRef(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: runOnce,
    threshold: 0.1, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView && nodeRef.current) {
      // Animate inViewProperties when component is in view
      const inViewAnimation = {
        ...inViewProperties,
        transition: { duration: inViewTransitionTime, delay: inViewDelay },
      };
      const controls = animateProperties(nodeRef.current, inViewAnimation);

      return () => {
        // Clean up animation on unmount
        controls.stop();
      };
    }
  }, [inView, inViewProperties, inViewTransitionTime, inViewDelay]);

  useEffect(() => {
    // Animate properties on scroll
    const scrollAnimation = {
      ...properties,
    };
    const controls = animateProperties(nodeRef.current, scrollAnimation);

    return () => {
      // Clean up animation on unmount
      controls.stop();
    };
  }, [properties]);

  const animateProperties = (element, animation) => {
    return motion.animate(element, animation);
  };

  return (
    <div ref={inViewRef}>
      <motion.div ref={nodeRef}>{children}</motion.div>
    </div>
  );
};

export default ScrollEffect;
