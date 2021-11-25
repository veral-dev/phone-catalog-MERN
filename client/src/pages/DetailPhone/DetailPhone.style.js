import styled from 'styled-components';

const PhoneImage = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  object-fit: cover;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const DetailsContainer = styled.div`
  margin: 0 20px 150px 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    max-width: 900px;
  }
`;

const DetailsFlex = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
`;

const Price = styled.div`
  text-align: right;
  strong {
    font-size: 2.5rem;
    font-weight: 900;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;

export { PhoneImage, DetailsContainer, DetailsFlex, Price, ButtonContainer };
