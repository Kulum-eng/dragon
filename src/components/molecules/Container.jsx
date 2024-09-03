import styled from "styled-components";
import Imagen from "../atoms/Image";
import Information from "../atoms/Text";

const StyledDiv = styled.div`
  background-color: #3d3d3d;
  border-radius: 15px;
  margin: 13px auto;  
  width: 48%;
  display: flex;
  max-height: 225px;
`;

const StyledContainerImage = styled.div`
  border-radius: 8px 0 0 8px;
  margin: 0;
  width: 280px;
  height: 100%;
`;

const StyledContainerData = styled.div`
  padding: 1%;
  border-radius: 8px;
  width: 80%;
`;

function Container(props) {
    return (
        <StyledDiv key={props.id}>
            <StyledContainerImage>
                <Imagen src={props.image} alt={props.name} />
            </StyledContainerImage>

            <StyledContainerData>
                <Title text={props.name} />
                <Information text={`dragon: ${props.race}`} />
                <Information text={`sd: ${props.gender}`} />
                <Information text={`wd: ${props.ki}`} />
                <Information text={`ki: ${props.maxKi}`} />
                <Information text={`cwe: ${props.affiliation}`} />
            </StyledContainerData>
        </StyledDiv>
    );
}

export default Container;
