import React, { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

export default function AnimatedNumber({ to, from = 0, duration = 1.5, className, prefix = '', suffix = '' }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;
    const controls = animate(from, to, {
      duration,
      ease: 'easeOut',
      onUpdate(value) {
        if (node) {
          if (String(to).includes('.')) {
            node.textContent = `${prefix}${value.toFixed(1)}${suffix}`;
          } else {
            node.textContent = `${prefix}${Math.round(value)}${suffix}`;
          }
        }
      },
    });
    return () => controls.stop();
  }, [to, from, duration, prefix, suffix]);

  return <span ref={nodeRef} className={className} />;
}
