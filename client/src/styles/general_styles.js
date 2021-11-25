import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin: 0 20px;
  margin-top: 50px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(10px, auto);
  }
`;
export { Grid };
