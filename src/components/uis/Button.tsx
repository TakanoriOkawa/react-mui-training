import styled from "@emotion/styled";
import MuiButton from "@mui/material/Button";

const CustomMuiButton = styled(MuiButton)<{type: string}>`
  color: ${({type}) => {
      if(type){
          return "red";
      }
  }};
  background-color: white;
`

export const Button = ({

}) => {
    return(
        <CustomMuiButton type="button">ボタンです</CustomMuiButton>
    )
}