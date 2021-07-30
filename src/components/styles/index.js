import styled from 'styled-components'

// Menu UL LI
const Ul = styled.ul`  
  list-style-type: none;    
  position: relative;  
  display: flex;        
  justify-self: start;

  width: 100%;  
  height: 100%;  
  margin: 0 auto;  
    
  @media (min-width: 800px) {
    width: 800px;
  }
`
const Li = styled.li`    
  //transform: scale(.8);
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;        
  text-align: center;
  height: 100%;
  color: black;
  &:hover {
    cursor: pointer;
  }  

  @media (min-width: 376px) {
    //width: 60px;
  }
  @media (min-width: 500px) {
    /* width: 100px;
    transform: scale(1); */
  }
  @media (min-width: 750px) {
    //width: 80px;    
  }
  @media (min-width: 800px) {    
  }  
`
const ActiveLi = styled(Li)`
  color: lightseagreen;
  font-weight: bold;
  border-bottom: 3px solid lightseagreen;
`
// Button
const Button = styled.button`  
  position: absolute;
  height: 100%;
  right: 10%;  
  display: flex;
  align-items: center;
  justify-content: center; 
  //transform: scale(.8);   
  background:transparent;  
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 376px) {
    //width: 60px;
  }
  @media (min-width: 500px) {
    /* width: 60px;
    transform: scale(1); */
  }
  @media (min-width: 750px) {
    //width: 80px;    
  }
  @media (min-width: 800px) {
    //width: 90px;    
  }
`

const Input = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  border-bottom: 1px solid lightseagreen;

  &:focus {
    outline: none;
  }
`
export { Ul, Li, ActiveLi, Button, Input }