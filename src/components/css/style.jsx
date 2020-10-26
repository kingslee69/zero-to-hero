import banner from "../../images/banner.jpg";
import styled from "styled-components";


export const HeaderImage = styled.div`
  background: linear-gradient(
      0deg,
      rgba(51, 94, 234, 0.65) 0%,
      #007bff 76.04%,
      #007bff 76.05%
    ),
    url(${banner});
  position: relative;
  width: 100%;
  height: auto;
  left: 0px;
  top: 0;
`;

export const Header1 = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 900;
  font-size: 42px;
  line-height: 70px;
  text-align: center;
  color: #f9fbfd;
`;

export const Header2 = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 65px;
  text-align: center;
  color: #1b2a4d;
`;
export const Header2Dark = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 50px;
  text-align: center;
  color: #1b2a4d;
`;
export const Header3 = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 48px;
  text-align: center;
  color: #f9fbfd;
`;
export const Header3Dark = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: #1b2a4d;
`;
export const Body = styled.p`
font-family: Segoe UI;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 185%;
color: #869AB8;
`;
export const BodyCenter = styled.p`
font-family: Segoe UI;
font-style: normal;
font-weight: normal;
text-align: center;
font-size: 20px;
line-height: 185%;
color: #869AB8;
`;
export const BodyLight = styled.p`
font-family: Segoe UI;
font-style: normal;
font-weight: normal;
text-align: center;
font-size: 20px;
line-height: 185%;
color: #F1F4F8;
`;
export const BodyStrike = styled.p`
font-family: Segoe UI;
font-style: normal;
font-weight: normal;
text-align: center;
text-decoration: line-through;
font-size: 20px;
line-height: 185%;
position: relative;
top: -25px;
color: #869AB8;
`;
export const BodyList = styled.ul`
font-family: Segoe UI;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 185%;
color: #869AB8;
`;

export const Icon = styled.div`
  width: 25px;
  height: 25px;
`;

export const BtnText = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #f9fbfd;
`;

export const Card = styled.div`
    background-color: #F1F4F8;
    // width: 400px;
    overflow: none
   
`

export const BenefitText =styled.p`
font-family: Segoe UI;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 185%;
color: #1B2A4D;
`