import styled from "styled-components";
import { motion } from "framer-motion";


export const LogInDiv = styled(motion.div)`
position: absolute;
right: 50%;
top: 40%;
color: #354A21;
background-color: white;
border: 1px solid white;
border-radius: 10px;
padding: 10px;
cursor: pointer;
z-index: 500;
transition: 1s;
font-weight: 500;
font-size: 20px;

:hover{
background-color: white;
color: #354A21;
}
`;


export const MainLandingDiv = styled(motion.div)`
background-color: #333;
width: 100vw;
height: 100vh;
overflow: hidden;
  .photo1 {
    position: relative;
    top: 10%;
    right: -10%;
    width: 90%;

  }
    .photo2{
    position: relative;
    bottom: -25%;
    left: 100%;
    width: 90%;
  }
  .photo3 {
    position: relative;
    bottom: -50%;
    left: 0%;
    width: 60%;
  }
  .photo5 {
    position: relative;
    top: -60%;
    left: 150%;
    width: 80%;
  }
  .photo6 {
    position: relative;
    top: 30%;
    left: 40%;
    width: 100%;
  }
  .photo7 {
    position: relative;
    top:20%;
    left: -140%;
    width: 66%;
  }
  .photo8 {
    position: relative;
    bottom: -10%;
    right: 140%;
    width: 60%;
    border: 1px solid blue;
  }
`;

