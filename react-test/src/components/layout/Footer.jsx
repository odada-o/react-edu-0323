import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterWrap>
            <CorpList>
                <li>
                    <Link to="/">이용약관</Link>
                </li>
                <li>
                    <Link to="/">개인정보처리방침</Link>
                </li>
                <li>
                    <Link to="/">고객센터</Link>
                </li>
            </CorpList>
            <div className="mt-10 text-gray-600">Copyright © company. All rights reserved.</div>
        </FooterWrap>
    )
}

const FooterWrap = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: ${(props) => props.theme.colors.gray[100]};
`

const CorpList = styled.ul`
    display: flex;
    li {
        &::before {
            content: '|';
            margin: 0 2px;
        }
        &:first-child::before {
            content: '';
        }
    }
    a {
        color: ${(props) => props.theme.colors.red};
        padding: 2rem;
    }
`

export default Footer
