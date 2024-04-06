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

// Button 컴포넌트를 상속받아서 GhostButton 컴포넌트를 만들 수 있습니다.
export const GhostButton = styled(Button)`
    background-color: transparent;
    color: ${(props) => (props.black ? 'black' : 'white')};
`

export default Button
