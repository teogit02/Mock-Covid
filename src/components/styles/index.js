
import styled from 'styled-components'

// Menu UL LI
const Ul = styled.ul`
  width: 80%;    
  height: 100%;        
  margin: 0 auto;
  list-style-type: none;    
  display: flex;        
  justify-self: start;
`
const Li = styled.li`
  width: 100px;        
  display: flex;
  align-items: center;
  justify-content: center;        
  text-align: center;
  height: 100%;
  color: black;
  &:hover {
    cursor: pointer;
  }
`
const ActiveLi = styled(Li)`
  color: lightseagreen;
  font-weight: bold;
  border-bottom: 3px solid lightseagreen;
`
// Button
const Button = styled.button`
  border: 1px solid lightseagreen;
  position: absolute;
  height: 100%;
  right: 10%;
  width: 80px;    
  display: flex;
  align-items: center;
  justify-content: center;  
  &:hover {
    cursor: pointer;
  }
`
export { Ul, Li, ActiveLi, Button }