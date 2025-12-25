import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleBackground = () => {
  const ref = useRef();

  const sphere = useMemo(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 }),
    []);

  useFrame((state, delta) => {
    const { x, y } = state.mouse;
    ref.current.rotation.x -= delta / 15 + (y * 0.05);
    ref.current.rotation.y -= delta / 20 + (x * 0.05);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

const Background3D = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000000' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <React.Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
            <ParticleBackground />
          </Float>
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;
