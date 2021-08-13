import { useSelector } from 'react-redux'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { dark } from './dark'
import { light } from './light'

const Global = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    transition: all 200ms;    
    .map {
      box-shadow: ${({ theme }) => theme.boxShadow};
      //border: ${({ theme }) => theme.border};
      &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow};                    
      }
    }        
    .overview {
      .active, .death, .recover { 
        box-shadow: ${({ theme }) => theme.boxShadow};
        border: ${({ theme }) => theme.border};
        &:hover {
          box-shadow: ${({ theme }) => theme.boxShadow};
          transform: scale(1.01);
          transition: all .3s;
        }
      }      
    }
    .chart {
      box-shadow: ${({ theme }) => theme.boxShadow};
      border: ${({ theme }) => theme.border};
      &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow};                    
      }
      button {
        background-color: ${({ theme }) => theme.background};        
      }
    }      
    .data-table {
      box-shadow: ${({ theme }) => theme.boxShadow};
      border:${({ theme }) => theme.border};       
      Table {
        //background-color: ${({ theme }) => theme.background};             
      }      
      .column {
        background-color: ${({ theme }) => theme.background};           
        color: ${({ theme }) => theme.textColor};
        &:hover{
          background-color: ${({ theme }) => theme.background};          
        }
      }
      .row{
        //color:${({ theme }) => theme.textColor};
        //background-color: ${({ theme }) => theme.background};
        .column {
          //background-color: ${({ theme }) => theme.background};                
          //color: ${({ theme }) => theme.textColor};
          &:hover{
            //background-color: ${({ theme }) => theme.background};          
          }
        }
        &:hover .column{
          background-color: ${({ theme }) => theme.bgHover};
          color:${({ theme }) => theme.textColor};          
        }                       
      }
      &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow};
      }     
    }                                        
  }
`
function Theme(props) {
  const { theme } = useSelector(state => state.reducer.theme)
  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Global />
      {props.children}
    </ThemeProvider>
  )
}

export default Theme