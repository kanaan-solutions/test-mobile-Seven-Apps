import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
	/* padding: 0 140px; */

`;

export const InputText = styled.TextInput.attrs({
	placeholderTextColor: "#c3c3c3"
}) `
	font-size: 22px;
	font-weight: bold;
	color:#ccc;
`;

export const Label= styled.Text`
  font-size: 16px;
  color: #bbbbbb; 
`;