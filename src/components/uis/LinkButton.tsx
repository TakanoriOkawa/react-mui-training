import Link from "@mui/material/Link";
// 矢印アイコンを追加
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import styled from "@emotion/styled";


const CustomLinkButton = styled(Link)`
  background-color: white;
  color: #0e0688;
  border-radius: 5px;
  font-weight: 600;
  border: none;
  padding: 32px;
  text-decoration:none;
  &:hover {
    color: pink;
  }
`
const LinkButton = () => {
  return (
    <>
        <CustomLinkButton>
            チェック
            <ArrowRightRoundedIcon style={{color: "#0e0688", width: "19px"}}></ArrowRightRoundedIcon>
        </CustomLinkButton>
    </>
  )
}

export default LinkButton