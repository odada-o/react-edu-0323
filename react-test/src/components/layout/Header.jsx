import styled from 'styled-components'
import Gnb from './Gnb'
import Button, { GhostButton, OutlineButton } from '../common/Button'
import { css } from '@emotion/react'

const Header = () => {
    return (
        <HeaderWrap>
            <h1 className="text-3xl font-bold underline">Header</h1>
            <Gnb />

            <div className="util">
                <Button primary>마이페이지</Button>
                <Button>장바구니</Button>
                <GhostButton>로그인</GhostButton>
                <button css={outlineButton}>회원가입</button>
            </div>
        </HeaderWrap>
    )
}

const outlineButton = css`
    padding: 10px 20px;
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`

const HeaderWrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    text-align: center;
    padding: 10px;
    #gnb {
        ul {
            display: flex;
            justify-content: center;
            gap: 20px;
            list-style: none;
            li {
                a {
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
    }
`

// const Button = styled.button`
//     padding: 10px 20px;
//     border: none;
//     background-color: ${(props) => (props.primary ? 'navy' : 'white')};
//     color: ${(props) => (props.primary ? 'white' : 'navy')};
//     cursor: pointer;
//     &:hover {
//         opacity: 0.8;
//     }
// `

export default Header
