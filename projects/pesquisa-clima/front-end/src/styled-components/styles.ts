import styled from 'styled-components';

interface Props {
  color: string;
}

interface Height {
  height: string;
}

export const Title = styled.h1<Props>`
  color: ${props => `${props.color}`};
`;
export const Label = styled.label<Props>`
  color: ${props => `${props.color}`};
  `;

export const Text = styled.p<Props>`
  color: ${props => `${props.color}`};
  `;

export const CenterColumnDiv = styled.div<Height>`
  min-height: ${props => `${props.height}vh`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input, button {
    border-radius: 40px;
    height: 50px;
    outline: none;
    font-size: 2em;
    text-align: center;
    cursor: pointer;
  }
  input {
    width: 500px;
  }
  button {
    width: 400px;
  }
`;

export const HomeCenterColumnDiv = styled(CenterColumnDiv)`
  width: 500px;
  margin: auto;
  text-align: center;
`;


export const QuestionCenterColumnDiv = styled(CenterColumnDiv)`
button {
  border-radius: 40px;
    height: 50px;
    /* width: 700px; */
    outline: none;
    font-size: 1em;
    text-align: center;
    background: #E630C0;
    color: #fff;
    font-weight: 900;
    margin-top: 20px;
}
`;

export const SmallButtons = styled.button`
  border-radius: 40px;
    height: 50px;
    width: 100px;
    outline: none;
    font-size: 1em;
    text-align: center;
    background: #E630C0;
    color: #fff;
    font-weight: 900;
    margin-top: 20px;
`;