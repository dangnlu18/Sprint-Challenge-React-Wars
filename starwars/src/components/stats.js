import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
	color:yellow;
`;


function Stats(props){
	return (
		<div>
			<Paragraph> Gender: {props.gender} </Paragraph>
			<Paragraph> Height: {props.height} </Paragraph>
			<Paragraph> Mass: {props.mass} </Paragraph>
			<Paragraph> Hair Color: {props.hair_color} </Paragraph>
		</div>
		)
}


export default Stats;