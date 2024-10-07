import { useEffect, useState  } from "react";
import { useGLTF, useAnimations } from "@react-three/drei"
import { useRef } from "react"
import robotModel from "../assets/models/robot_playground.glb"


useGLTF.preload(robotModel)
export default function Robot() {
    const [scale, setScale] = useState([]);
    const [position, setPosition] = useState([]);
    const group = useRef(null);
    const {animations, scene} = useGLTF(robotModel)
    const { actions, names } = useAnimations(animations, group);
    useEffect(() => {
        actions[names[0]]?.play();
    }, [actions, names]);

    useEffect(() => {
        
        const windowSizeHandler = () => {
            if (window.innerWidth < 768) {
                setScale([3.2,3.2,3.2]);
                setPosition([0, -2.5, 0])
            } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
                setScale([3.5,3.5,3.5]);
                setPosition([0, -3, 0])
            } else {
                setScale([2.3,2.3,2.3]);
                setPosition([0, -1.8, 0])
            }
        };
        windowSizeHandler();
        window.addEventListener("resize", windowSizeHandler);

        return () => {
            window.removeEventListener("resize", windowSizeHandler);
        };
    }, []);

    return (
        <group ref={group}>
            <primitive object={scene} position={position} scale={scale}/>

        </group>
    )
    
}