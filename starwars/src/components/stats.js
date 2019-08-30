import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
	color:yellow;
`;


function Stats(props){
	return (
		<div>
			<Paragraph> {props.gender} </Paragraph>
			<Paragraph> {props.height} </Paragraph>
			<Paragraph> {props.mass} </Paragraph>
			<Paragraph> {props.hair_color} </Paragraph>
		</div>
		)
}


export default Stats;