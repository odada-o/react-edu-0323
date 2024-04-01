import React from 'react'
import { css } from '@emotion/react'

const Footer = () => {
    return (
        <footer class="flex justify-between bg-gray-300" css={footerStyle}>
            {/* tailwind theme color primary 적용 */}
            <strong class="bg-primary text-secondary">logo</strong>
        </footer>
    )
}

// emotion 사용법
// const 변수명 = css`스타일`
const footerStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
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

export default Footer
