import styled from "styled-components";

export const Wrapper = styled.div`
    overflow-x: inherit;
    .logo{
    position: fixed;
    margin: 20px 10px;
    margin-left: 30px;
        img{
            width: 92px;
            height: 30px;
        }
    }

    @media screen and (max-width: 400px){
        .logo{
            margin-top: 15px;
            margin-left: 20px;
        }
        .white{
            background-color: white;
            position: fixed;
            height: 141px;
            width: 100%;
            top: 0;
        }
    }
`;