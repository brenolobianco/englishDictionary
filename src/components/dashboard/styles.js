import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column ;
    }
`;
export const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  .instructions{
    display:flex;
    flex-direction:column ;
    line-height:30px ;
      text-align:center;
      width:500px ;
    margin-bottom:10px;
    }
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
    height: 180px;
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
    gap: 15px;
  }
  button {
    width: 150px;
    font-size:15px ;
    cursor: pointer;
    height: 30px;
    background: #ffffff;
    border: 1px solid black;
  }
`;
export const WordBox = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 300px;
  margin-bottom:80px;
  display: flex;
    justify-content: flex-start;
    align-items: flex-start;
 ul{
display:flex ;
flex-wrap:wrap;
justify-content:flex-start ;
align-items:flex-start ;
max-height:260px ;
overflow-y:auto;

 }
  li {
    cursor: pointer;
    list-style: none;
    height: 35px;
    width: 130px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      background:whitesmoke
    }
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
    &:hover{
      background:whitesmoke
    }
  }
`;
