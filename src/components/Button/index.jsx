/* eslint-disable indent */
import styled, { css } from 'styled-components'

const primary = css`
	min-width: 150px;
	min-height: 80px;

	background-color: #667761;

	border-radius: 10px;

	font-size: 32px;
`

const circle = css`
	width: 32px;
	height: 32px;

	margin-left: 16px;

	background-color: #917C78;
	background-size: 16px 16px;
	background-repeat: no-repeat;
	background-position: center center;

	border-radius: 16px;
`

const save = css`
	${circle}

	background-image: url('/img/save.svg');
`

const cancel = css`
	${circle}

	background-image: url('/img/cancel.svg');
	background-size: 24px 24px;
`

const remove = css`
	${circle}

	background-image: url('/img/delete.svg');
`

const edit = css`
	${circle}

	background-image: url('/img/edit.svg');
`

const Button = styled.button`
	border: none;

	font-family: 'League Spartan', sans-serif;
	font-style: normal;

	line-height: 1.5;
	color: #EAE1DF;

	outline: none;

	&:hover {
		background-color: #3A413B;
	}

	&:focus {
		outline: 5px solid rgba(58, 65, 59, 0.6)
;
	}

	${(props) => {
		switch (props.variant) {
			case 'primary':
				return primary
			case 'save':
				return save
			case 'cancel':
				return cancel
			case 'remove':
				return remove
			case 'edit':
				return edit
			default:
				return primary
		}
	}}
`

export default Button
