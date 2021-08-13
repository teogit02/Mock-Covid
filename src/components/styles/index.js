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
  //ipad
  @media (min-width: 768px) {
    width: 90%;
  }
  // ipad pro
  @media (min-width: 1024px) {    
  }
  // desktop
  @media (min-width: 1280px) { 
    
  }
`
const Li = styled.li`    
  //transform: scale(.8); 
  display: flex;  
  align-items: center;
  justify-content: center;        
  text-align: center;
  height: 100%;
  color: #fff;
  padding:10px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }  
  //ipad
  @media (min-width: 768px) {
    //width: 90px;
  }
  // ipad pro
  @media (min-width: 1024px) {
  }
  // desktop
  @media (min-width: 1280px) {     
  }
`
const ActiveLi = styled(Li)`
  color: black;
  //color: red;
  display:flex;  
  font-weight: bold;
  font-size:19px;
  //border-bottom: 2px solid #6596b1;
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
  //ipad
  @media (min-width: 768px) {
  }
  // ipad pro
  @media (min-width: 1024px) {
  }
  // desktop
  @media (min-width: 1280px) { 
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