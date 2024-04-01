import { css } from '@emotion/react'
import styled from 'styled-components'

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: ${(props) => (props.primary ? props.theme.colors.black : props.theme.colors.white)};
    color: ${(props) => (props.primary ? props.theme.colors.white : props.theme.colors.black)};
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`

export const GhostButton = styled(Button)`
    background-color: transparent;
    color: ${(props) => (props.black ? 'black' : 'white')};
`

// emotion 라이브러리를 사용해 OutlineButton을 만들어보세요.

export default Button
