import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.div`
  width: min-content;
  padding: 5px 10px;
  margin-right: 10px;
  background-color: #bebebe;
  border: none;
  border-bottom: 2px solid #3c5d95;
  border-radius: 3px 3px 0 0;
  color: white;
  letter-spacing: 0.1em;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #ffc236;
  }
`;
function Filter() {
    return (
      <ButtonContainer>
      <Button>ALL</Button>
      <Button>TODO</Button>
      <Button>DONE</Button>
    </ButtonContainer>
      );
    }
    
export default Filter;