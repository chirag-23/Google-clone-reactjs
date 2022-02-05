import styled from "styled-components";

export const Wrapper = styled.div`

    margin-top: 26vh;
    margin-bottom: 25px;
    img{
        width: 272px;
        height: 92px;
    }
    .logo{
        display: flex;
        justify-content: center;
    }
    @media screen and (max-width: 400px ){
        img{
            width: 250px;
        }
    }
`;
