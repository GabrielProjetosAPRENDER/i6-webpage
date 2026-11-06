import React, { useEffect, useRef } from 'react';
import styles from './InteractiveCity.module.css';

interface Building {
  x: number;
  z: number;
  w: number;
  h: number;
  d: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
}

export const InteractiveCity: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Mouse coordinates (normalized -1 to 1)
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    // Track mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / width) * 2 - 1;
      targetMouseY = ((e.clientY - rect.top) / height) * 2 - 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Dynamic resize handler
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Camera parameters
    const focalLength = 350;
    let cameraZ = 450;
    
    // Angles for camera rotation (Euler angles)
    let angleX = -0.3; // Tilt slightly downward
    let angleY = 0.5; // Rotate slightly to the side

    // Seed buildings in 3D Space
    const buildings: Building[] = [];
    const colors = [
      'rgba(59, 130, 246, 0.45)', // Blue-500
      'rgba(96, 165, 250, 0.35)', // Blue-400
      'rgba(14, 165, 233, 0.3)'   // Sky-500
    ];

    const generateCity = () => {
      buildings.length = 0;
      // Grid of buildings
      for (let gridX = -3; gridX <= 3; gridX++) {
        for (let gridZ = -3; gridZ <= 3; gridZ++) {
          // Skip the center to make a "central square" / grid focal area
          if (gridX === 0 && gridZ === 0) continue;
          if (Math.random() > 0.7) continue; // Random spacing

          const x = gridX * 90 + (Math.random() - 0.5) * 20;
          const z = gridZ * 90 + (Math.random() - 0.5) * 20;
          const w = 30 + Math.random() * 20;
          const h = 80 + Math.random() * 140; // Heights
          const d = 30 + Math.random() * 20;
          const color = colors[Math.floor(Math.random() * colors.length)];

          buildings.push({ x, z, w, h, d, color });
        }
      }
    };

    generateCity();

    // Floating particles
    const particles: Particle[] = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 500,
        y: -100 - Math.random() * 200,
        z: (Math.random() - 0.5) * 500,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.2 - Math.random() * 0.4, // float upwards
        vz: (Math.random() - 0.5) * 0.4,
        size: 1 + Math.random() * 2,
        color: `rgba(96, 165, 250, ${0.3 + Math.random() * 0.5})`
      });
    }

    // 3D rotation projection formulas
    const project = (x: number, y: number, z: number) => {
      // Rotation around Y (horizontal rotation)
      let cosY = Math.cos(angleY);
      let sinY = Math.sin(angleY);
      let x1 = x * cosY - z * sinY;
      let z1 = x * sinY + z * cosY;

      // Rotation around X (vertical tilt)
      let cosX = Math.cos(angleX);
      let sinX = Math.sin(angleX);
      let y2 = y * cosX - z1 * sinX;
      let z2 = y * sinX + z1 * cosX;

      // Screen projection coordinates
      const scale = focalLength / (z2 + cameraZ);
      const screenX = width / 2 + x1 * scale;
      const screenY = height / 2.2 + y2 * scale;

      return { x: screenX, y: screenY, scale, depth: z2 };
    };

    // Render loop
    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinates tracking (lerp)
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Modify camera rotation subtly based on mouse coordinates
      angleY = 0.45 + mouseX * 0.12;
      angleX = -0.25 + mouseY * 0.08;

      // Draw Horizon Ground lines
      const groundCoords: {x: number, z: number}[] = [
        { x: -300, z: -300 },
        { x: 300, z: -300 },
        { x: 300, z: 300 },
        { x: -300, z: 300 }
      ];
      
      const projectedGround = groundCoords.map(c => project(c.x, 0, c.z));
      
      ctx.beginPath();
      ctx.moveTo(projectedGround[0].x, projectedGround[0].y);
      for (let i = 1; i < projectedGround.length; i++) {
        ctx.lineTo(projectedGround[i].x, projectedGround[i].y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Sort buildings by depth (painter's algorithm) so back elements render behind front elements
      const projectedBuildings = buildings.map(b => {
        // Calculate points for the box wireframe
        const halfW = b.w / 2;
        const halfD = b.d / 2;
        
        // 8 Vertices of the 3D box
        const p1 = project(b.x - halfW, 0, b.z - halfD); // bottom back left
        const p2 = project(b.x + halfW, 0, b.z - halfD); // bottom back right
        const p3 = project(b.x + halfW, 0, b.z + halfD); // bottom front right
        const p4 = project(b.x - halfW, 0, b.z + halfD); // bottom front left
        
        const p5 = project(b.x - halfW, -b.h, b.z - halfD); // top back left
        const p6 = project(b.x + halfW, -b.h, b.z - halfD); // top back right
        const p7 = project(b.x + halfW, -b.h, b.z + halfD); // top front right
        const p8 = project(b.x - halfW, -b.h, b.z + halfD); // top front left

        // Compute average depth
        const avgDepth = (p1.depth + p2.depth + p3.depth + p4.depth + p5.depth + p6.depth + p7.depth + p8.depth) / 8;

        return { b, p1, p2, p3, p4, p5, p6, p7, p8, avgDepth };
      });

      projectedBuildings.sort((a, b) => b.avgDepth - a.avgDepth);

      // Draw Buildings
      projectedBuildings.forEach(({ b, p1, p2, p3, p4, p5, p6, p7, p8 }) => {
        // Draw walls wireframe
        ctx.beginPath();
        // Bottom loop
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.closePath();

        // Top loop
        ctx.moveTo(p5.x, p5.y);
        ctx.lineTo(p6.x, p6.y);
        ctx.lineTo(p7.x, p7.y);
        ctx.lineTo(p8.x, p8.y);
        ctx.closePath();

        // Verticals
        ctx.moveTo(p1.x, p1.y); ctx.lineTo(p5.x, p5.y);
        ctx.moveTo(p2.x, p2.y); ctx.lineTo(p6.x, p6.y);
        ctx.moveTo(p3.x, p3.y); ctx.lineTo(p7.x, p7.y);
        ctx.moveTo(p4.x, p4.y); ctx.lineTo(p8.x, p8.y);

        ctx.strokeStyle = b.color;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Subtle glow dots on tops of buildings
        ctx.beginPath();
        ctx.arc(p7.x, p7.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = '#60A5FA';
        ctx.fill();
      });

      // Update and Draw floating particles
      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;
        p.z += p.vz;

        // Reset if floats above camera view
        if (p.y < -350) {
          p.y = 0;
          p.x = (Math.random() - 0.5) * 500;
          p.z = (Math.random() - 0.5) * 500;
        }

        const proj = project(p.x, p.y, p.z);

        // Render point if in front of camera
        if (proj.depth > -cameraZ + 20) {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, p.size * proj.scale * 0.0035, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      });

      // Draw subtle light nodes linking buildings to form a network
      for (let i = 0; i < Math.min(projectedBuildings.length - 1, 8); i++) {
        const buildA = projectedBuildings[i];
        const buildB = projectedBuildings[i + 1];
        
        ctx.beginPath();
        ctx.moveTo(buildA.p7.x, buildA.p7.y);
        ctx.lineTo(buildB.p7.x, buildB.p7.y);
        ctx.strokeStyle = 'rgba(96, 165, 250, 0.08)';
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};

export default InteractiveCity;
