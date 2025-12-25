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
    const glowRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (coreRef.current) {
            coreRef.current.rotation.x = t * 0.2;
            coreRef.current.rotation.y = t * 0.4;
        }
        if (glowRef.current) {
            glowRef.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.08);
        }
    });

    return (
        <group>
            {/* Nucleus - Deep Space Black Matter Core */}
            <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
                <group>
                    {/* The Void / Black Matter */}
                    <Sphere ref={coreRef} args={[0.85, 100, 100]}>
                        <MeshDistortMaterial
                            color="#020617" /* Ultra Deep Black/Blue */
                            speed={3}
                            distort={0.4}
                            roughness={0.1}
                            metalness={0.9}
                            emissive="#000000"
                        />
                    </Sphere>

                    {/* Core Light source - subtle interior glow */}
                    <pointLight intensity={1.5} distance={3} color="#ffffff" />
                </group>
            </Float>

            {/* Electron Orbits - High-speed Silver trails */}
            <Electron radius={2.2} speed={1.8} offset={0} angleOffset={Math.PI / 4} />
            <Electron radius={2.2} speed={1.5} offset={Math.PI} angleOffset={-Math.PI / 4} />
            <Electron radius={3.2} speed={1.2} offset={2} angleOffset={Math.PI / 2} />

            {/* Visual Orbit Tracks - Delicate Silver Rings */}
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

            {/* Subatomic Dust Particles */}
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
