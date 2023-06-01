import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = skillsRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (currentRef) {
      currentRef.appendChild(renderer.domElement);
    }

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = 512;
    canvas.height = 256;

    if (context) {
      context.font = '40px Arial';
      context.fillStyle = 'white';
      context.fillText('May the Force be with you', 50, 50);
    }

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const geometry = new THREE.PlaneGeometry(8, 4);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2; // tilt the plane

    scene.add(mesh);
    camera.position.z = 5;

    let animationId: number;

    const animate = function () {
      animationId = requestAnimationFrame(animate);

      mesh.position.y += 0.01; // move the text upwards
      mesh.position.z += 0.01; // move the text away

      renderer.render(scene, camera);
    };

    console.log(canvas.toDataURL());

    animate();

    // Clean up
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }

      // remove mesh from scene
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      texture.dispose();

      // dispose of the renderer
      renderer.dispose();

      // remove the renderer's dom element from the HTML
      if (currentRef) {
        currentRef.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className='h-screen snap-start'>
      <div ref={skillsRef}></div>
    </div>
  );
}

export default Skills;
