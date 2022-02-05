import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px;
    a{
        text-decoration: none;
    }
    .active , .notactive{
            display: flex;
            align-items: center;
            margin: 0px 20px;
            padding: 5px;
            color: #141414;
            cursor: pointer;
    }
    .active{
        border-bottom: 3px solid blue;
    }
    .icon{
        padding-right: 4px;
    }
    border-bottom: 1px solid rgba(211, 211, 211, 0.609);

    @media screen and (max-width: 400px) {
        position: fixed;
        left: 6px;
        right: 6px;
        margin-top: 94px;
        .active, .notactive{
            margin: 0px 6px;
        }
        .option{
            font-size: 0.9rem;
        }
    }
`;