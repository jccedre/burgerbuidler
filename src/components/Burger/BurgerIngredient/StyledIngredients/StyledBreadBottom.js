import styled from 'styled-components';

const StyledBreadBottom = styled.div`
  height: 13%;
  width: 100%;
  background: linear-gradient(#F08E4A, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;

  ${props => props.theme.media.largeSmall`
    height: 15%;
  `}
`;

export default StyledBreadBottom;
