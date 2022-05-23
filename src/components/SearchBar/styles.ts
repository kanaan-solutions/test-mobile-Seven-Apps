import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
	padding: 5px 0;
	width: 65%;
	margin: 5px 70px;
`;

export const InputText = styled.TextInput.attrs({
	placeholderTextColor: "#c3c3c3"
}) `
	font-size: 20px;
	font-weight: bold;
	color:#ccc;
	margin-right: 80px;
	margin-top: 3px;
`;

export const Label= styled.Text`
  font-size: 16px;
  color: #bbbbbb; 
`;