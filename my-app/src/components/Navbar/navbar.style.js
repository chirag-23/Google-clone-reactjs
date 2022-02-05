import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 6px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 2px 10px;
    padding-top: 6px;
    position: fixed;
    right: 10px;

    a{
        text-decoration: none;
        color: #000000DE;
        font-weight: 500;
        font-size: 0.8rem;
        padding: 0px 10px;
        :hover{
            text-decoration: underline;
        }
    }
    .apps{
        padding: 8px;
        border-radius: 50%;
        margin-left: 0px;
        margin-right: 10px;
        color: rgba(0,0,0,0.5);
        transition: background-color 100ms ease-in;
        cursor: pointer;
        :hover{
            background-color: rgba(155, 155, 155, 0.15);
        }
    }
    .avatar{
        padding: 4px;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 100ms ease-in;
        :hover{
            background-color: rgba(155, 155, 155, 0.15);
        }
    }

    @media screen and (max-width: 550px){
        .apps{
            display: none;
        }
        .avatar{
            display: none;
        }
    }
`;