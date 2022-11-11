import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
export const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BoxLeft = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  align-items: center;
 
  .pinkBox {
    width: 300px;
    border: 1px solid red;
    height: 200px;
    background: pink;
    display:flex ;
    justify-content:center ;
    align-items:center;
    flex-direction:column ;
 }
 .meaningsBox{
  width:350px ;
  height:170px ;
 }
  .btns {
    display: flex;
    gap: 10px;
  }
  button {
    width: 100px;
    cursor: pointer;
    height: 30px;
    background: #ffffff;
    border: 1px solid black;
  }
`;
export const WordBox = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 450px;
  margin-bottom:80px;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 300px;
    height: 250px;
    border: 1px solid black;
  }
  li {
    cursor: pointer;
    list-style: none;
    height: 35px;
    width: 70px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const ButtonsBox = styled.div`
  width: 400px;
  margin-left: 10px;
  button {
    width: 100px;
    cursor: pointer;
    height: 30px;
    background: #ffffff;
    border: 1px solid black;
  }
`;
