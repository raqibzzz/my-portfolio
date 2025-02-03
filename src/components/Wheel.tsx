import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const PhysicsWheel = ({ scrollSpeed }: { scrollSpeed: number }) => {
  const x = useMotionValue(100);
  const y = useMotionValue(100);
  const rotation = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Physics state
  const velocityXRef = useRef(0);
  const velocityYRef = useRef(0);
  const angularVelocityRef = useRef(0);
  
  const xSpring = useSpring(x, {
    stiffness: 400,
    damping: 30,
    mass: 1
  });
  
  const ySpring = useSpring(y, {
    stiffness: 400,
    damping: 30,
    mass: 1
  });
  
  const rotateSpring = useSpring(rotation, {
    stiffness: 200,
    damping: 10,
    mass: 0.5
  });

  useEffect(() => {
    if (isDragging) return;

    const wheelRadius = 75; // Radius in pixels
    const gravity = 0.5;
    const groundFriction = 0.98; // Friction when rolling on ground
    const airResistance = 0.995; // Air resistance factor
    const bounceEnergy = 0.6; // Energy retained after bounce
    const rollingResistance = 0.99; // How much the wheel slows down while rolling
    
    const updatePhysics = () => {
      // Update velocities
      velocityYRef.current += gravity;
      
      // Add scroll influence to horizontal velocity
      velocityXRef.current = velocityXRef.current * 0.95 + scrollSpeed * 0.2;

      // Update positions
      let nextY = ySpring.get() + velocityYRef.current;
      let nextX = xSpring.get() + velocityXRef.current;

      // Ground collision
      if (nextY > window.innerHeight - wheelRadius) {
        nextY = window.innerHeight - wheelRadius;
        velocityYRef.current = -velocityYRef.current * bounceEnergy;
        
        // Convert some vertical energy to rotation when hitting ground
        angularVelocityRef.current += velocityXRef.current * 0.2;
        
        // Apply rolling friction
        velocityXRef.current *= groundFriction;
      }

      // Wall collisions
      if (nextX < wheelRadius) {
        nextX = wheelRadius;
        velocityXRef.current = -velocityXRef.current * bounceEnergy;
        angularVelocityRef.current *= -bounceEnergy;
      } else if (nextX > window.innerWidth - wheelRadius) {
        nextX = window.innerWidth - wheelRadius;
        velocityXRef.current = -velocityXRef.current * bounceEnergy;
        angularVelocityRef.current *= -bounceEnergy;
      }

      // Update rotation based on horizontal movement when on ground
      if (nextY >= window.innerHeight - wheelRadius - 1) {
        // Sync rotation with movement
        angularVelocityRef.current = (velocityXRef.current / wheelRadius) * 10;
      }

      // Apply rolling resistance and air resistance
      velocityXRef.current *= airResistance;
      angularVelocityRef.current *= rollingResistance;

      // Update position and rotation
      xSpring.set(nextX);
      ySpring.set(nextY);
      rotateSpring.set(rotateSpring.get() + angularVelocityRef.current);

      requestAnimationFrame(updatePhysics);
    };

    const animation = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animation);
  }, [isDragging, scrollSpeed]);

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    // Convert drag release velocity to wheel physics
    velocityXRef.current = info.velocity.x * 0.5;
    velocityYRef.current = info.velocity.y * 0.5;
    angularVelocityRef.current = (info.velocity.x / 75) * 5; // Convert linear to angular velocity
  };

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: xSpring,
        y: ySpring,
        rotate: rotateSpring,
        width: 150,
        height: 150,
        cursor: 'grab',
      }}
      className="z-50"
      drag
      dragElastic={0.2}
      dragMomentum={true}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      whileDrag={{ cursor: 'grabbing' }}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
      >
        {/* Tire */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="#333333"
          stroke="#222222"
          strokeWidth="2"
        />
        
        {/* Rim outer ring */}
        <circle
          cx="100"
          cy="100"
          r="75"
          fill="#1a1a1a"
          stroke="#444444"
          strokeWidth="1"
        />
        
        {/* Spokes - 10 pairs */}
        {[...Array(10)].map((_, i) => {
          const angle = (i * 36) * (Math.PI / 180);
          const x1 = 100 + 30 * Math.cos(angle);
          const y1 = 100 + 30 * Math.sin(angle);
          const x2 = 100 + 70 * Math.cos(angle);
          const y2 = 100 + 70 * Math.sin(angle);
          return (
            <g key={i}>
              <path
                d={`M ${x1 - 8 * Math.sin(angle)} ${y1 + 8 * Math.cos(angle)} 
                   L ${x2 - 8 * Math.sin(angle)} ${y2 + 8 * Math.cos(angle)}
                   L ${x2 + 8 * Math.sin(angle)} ${y2 - 8 * Math.cos(angle)}
                   L ${x1 + 8 * Math.sin(angle)} ${y1 - 8 * Math.cos(angle)} Z`}
                fill="#808080"
                stroke="#666666"
              />
            </g>
          );
        })}
        
        {/* Center cap */}
        <circle
          cx="100"
          cy="100"
          r="25"
          fill="#1a1a1a"
          stroke="#444444"
          strokeWidth="2"
        />
        
        {/* Porsche logo */}
        <circle
          cx="100"
          cy="100"
          r="15"
          fill="#c0c0c0"
        />
        
        {/* Michelin text */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="none"
          id="tireCurve"
        />
        <text>
          <textPath
            href="#tireCurve"
            startOffset="25%"
            className="fill-white text-[12px] font-bold tracking-wider"
          >
            MICHELIN
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
};

export default PhysicsWheel;