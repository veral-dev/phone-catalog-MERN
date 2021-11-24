import styled from 'styled-components';

const FormContainer = styled.form`
  width: 600px;
  margin: auto;
`;

const ImageUploader = styled.label`
  cursor: pointer;
  border: 2px #b50000 solid;
  padding: 10px 0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: bold;
  border-radius: 4px;
  text-transform: uppercase;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const PhoneImage = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  object-fit: cover;
`;
const SubmitButton = styled.button`
  cursor: pointer;
  border: none;
  border: 2px #b50000 solid;
  width: 100%;
  padding: 10px 0;
  color: white;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: bold;
  border-radius: 4px;
  text-transform: uppercase;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b50000;
  margin-top: 1rem;
`;

export { FormContainer, ImageUploader, PhoneImage, SubmitButton };
