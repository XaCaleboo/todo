/* eslint-disable indent */
import styled, { css } from 'styled-components'

const typoLarge = css`
	font-size: 64px;
	font-weight: 500;

	line-height: 1.5em;
`
const typoMedium = css`
	font-size: 32px;
	font-weight: 300;

	line-height: 1.25em;
`

const typoSmall = css`
	font-size: 16px;
	font-weight: 100;

	line-height: 1.25em;
`

const Typo = styled.span`
	margin-top: 0.5rem;
	margin-bottom: 1rem;

	font-family: 'League Spartan', sans-serif;
	font-style: normal;

	color: ${(props) => props.color || '#3A413B'};

	${(props) => {
		switch (props.size) {
			case '1':
				return typoLarge
			case '2':
				return typoMedium
			case '3':
				return typoSmall
			default:
				return typoSmall
		}
	}}
`

export default Typo
