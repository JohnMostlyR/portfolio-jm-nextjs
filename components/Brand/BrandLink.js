import styled from 'styled-components';
import typography from '../../styles/templates/typography';

const BrandLink = styled.a.attrs({
  href: props => props.href || '#',
})`
  display: inline-block;
  width: 45px;
  color: #fff;
  text-decoration: none;
  
  ${typography.minion}
`;

export default BrandLink;