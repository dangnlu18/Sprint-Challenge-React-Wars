import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	color: yellow;
`;


function Header(props){
	return (
		<div>
			<Title> {props.name} </Title>
		</div>
		)
}

export default Header;