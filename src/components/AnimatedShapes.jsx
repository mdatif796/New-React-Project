import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  opacity: 0.7;
  top: -60px;
  left: -60px;
  position: absolute;
  z-index: -1;
  animation: square 25s linear alternate infinite;
  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #4e6bff;
  top: 200px;
  left: -100px;
  position: absolute;
  z-index: -1;
  animation: circle 25s linear alternate infinite;
  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;
const Rectangle = styled.div`
  width: 50px;
  height: 100px;
  background-color: #4e6bff;
  opacity: 0.5;
  top: 400px;
  left: -50px;
  position: absolute;
  z-index: -1;
  animation: rectangle 25s linear alternate infinite;
  @keyframes rectangle {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square></Square>
      <Circle></Circle>
      <Rectangle></Rectangle>
    </>
  );
};

export default AnimatedShapes;
