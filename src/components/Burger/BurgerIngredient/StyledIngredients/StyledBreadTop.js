import styled from 'styled-components';

const StyledBreadTop = styled.div`
  height: 20%;
  width: 100%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
  transition: height 0.5s;

  ${props => props.theme.media.largeSmall`
    height: 30%;
  `}
`;

export default StyledBreadTop;
