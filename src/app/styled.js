import styled from 'styled-components'
import { Typo, Input } from '../components'

export const TypoCenter = styled(Typo)`
	text-align: center;
`

export const AddTask = styled.form`
	display: flex;
	align-items: center;

	margin-bottom: 128px;
`

export const List = styled.ul`
	list-style-type: none;

	padding: 0;
`

export const ListItem = styled(Typo).attrs({
	as: 'li',
})`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin: 0;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;

	border-bottom: 1px solid #3A413B;
`

export const Actions = styled.div`
	display: flex;
	justify-content: space-evenly;
`

export const ChangebleTask = styled.form`
	display: flex;
	align-items: center;
`

export const Item = styled.div`
	height: 40px;

	overflow: hidden;
	text-overflow: ellipsis;
`

export const Edit = styled(Input)`
	height: 40px;
	padding: 0;

	border: none;

	text-align: left;

	line-height: 40px;
`
