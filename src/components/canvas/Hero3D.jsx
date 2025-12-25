import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Trail, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Electron = ({ radius, speed, offset, angleOffset = 0 }) => {
    const ref = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed + offset;
        ref.current.position.x = Math.sin(t) * radius;
        ref.current.position.z = Math.cos(t) * radius;
        ref.current.position.y = Math.sin(t + angleOffset) * (radius * 0.4);
    });

    return (
        <group>
            <Trail
                width={0.25}
                length={6}
                color={new THREE.Color('#ffffff')}
                attenuation={(t) => t * t}
            >
                <Sphere ref={ref} args={[0.08, 16, 16]}>
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#ffffff"
                        emissiveIntensity={4}
                    />
                </Sphere>
            </Trail>
        </group>
    );
};

const Atom = () => {
    const coreRef = useRef();
    const orbitsRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (orbitsRef.current) {
            // The Atomic Body (Orbits) rotates around the nucleus
            orbitsRef.current.rotation.y = t * 0.2;
            orbitsRef.current.rotation.z = t * 0.1;
        }
        // Nucleus 'A' is now perfectly fixed and facing forward
    });

    return (
        <group>
            {/* Nucleus - Liquid Metal Sphere */}
            <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
                <Sphere ref={coreRef} args={[0.85, 100, 100]}>
                    <MeshDistortMaterial
                        color="#020617"
                        speed={3}
                        distort={0.4}
                        roughness={0.1}
                        metalness={0.9}
                        emissive="#000000"
                    />
                </Sphere>
            </Float>

            {/* Ambient Base Glow (Static center) */}
            <Sphere args={[1.5, 32, 32]}>
                <meshBasicMaterial color="#ffffff" transparent opacity={0.04} />
            </Sphere>

            {/* Orbiting System - Everything in this group rotates */}
            <group ref={orbitsRef}>
                {/* Electron Orbits */}
                <Electron radius={2.2} speed={1.8} offset={0} angleOffset={Math.PI / 4} />
                <Electron radius={2.2} speed={1.5} offset={Math.PI} angleOffset={-Math.PI / 4} />
                <Electron radius={3.2} speed={1.2} offset={2} angleOffset={Math.PI / 2} />

                {/* Visual Orbit Tracks */}
                <group rotation={[Math.PI / 4, 0, 0]}>
                    <mesh>
                        <torusGeometry args={[2.2, 0.003, 16, 100]} />
                        <meshStandardMaterial color="#ffffff" opacity={0.15} transparent />
                    </mesh>
                </group>
                <group rotation={[-Math.PI / 4, 0, 0]}>
                    <mesh>
                        <torusGeometry args={[2.2, 0.003, 16, 100]} />
                        <meshStandardMaterial color="#ffffff" opacity={0.15} transparent />
                    </mesh>
                </group>
                <group rotation={[0, 0, Math.PI / 2]}>
                    <mesh>
                        <torusGeometry args={[3.2, 0.003, 16, 100]} />
                        <meshStandardMaterial color="#ffffff" opacity={0.15} transparent />
                    </mesh>
                </group>
            </group>

            {/* Subatomic Dust Particles (Static ambient) */}
            {[...Array(40)].map((_, i) => (
                <Sphere
                    key={i}
                    args={[0.015, 8, 8]}
                    position={[
                        (Math.random() - 0.5) * 7,
                        (Math.random() - 0.5) * 7,
                        (Math.random() - 0.5) * 7
                    ]}
                >
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
                </Sphere>
            ))}
        </group>
    );
};

export default Atom;
