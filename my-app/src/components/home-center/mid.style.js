import styled from "styled-components";

export const Content = styled.form`

    .row1{
        display: flex;
        justify-content: center;
        align-items: center;
        border: rgba(211, 211, 211, 0.609) 1px solid;
        border-radius: 30px;
        padding: 10px 15px;
        max-width: 38vw;
        margin: 0 auto;

        input{
            flex: 1;
            outline: none;
            border: none;
            padding: 2px 15px;
            /* width: 32vw; */
            font-size: 1rem;
            min-width: 40px;
        }

        .icon{
            color: gray;
            cursor: pointer;
        }
        .clear{
            margin-right: 10px;
            padding-right: 10px;
            border-right: 1px solid rgba(211, 211, 211, 0.609);
            cursor: pointer;
        }
        
        :hover{
            box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.14);
        }
    }

    #focus{
        :focus-within {
            box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.14);
        }
    }

    .hide{
        display: none;
    }

    .row2{
        margin-top: 30px;
        display: flex;
        justify-content: center;

        Button{
            margin: 5px;
            padding: 5px 15px;
            font-size: 0.85rem;
            letter-spacing: 0px;
            background-color: #f8f8f8;
            border: 1px solid white;
            text-transform: capitalize;
            color: #222;
            font-weight: 500;

            :hover{
                border: 1px solid #c6c6c6;
                box-shadow: 0 1px 2px rgba(0,0,0,0.1);
                /* background: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1); */
            }
        }
    }

    @media screen and (max-width: 400px){
        .row1{
            position: fixed;
            left: 10px;
            right: 10px;
            max-width: 100%;
            margin: 0px 20px;
            margin-top: 45px;
            background-color: white;
            input{
                width: 50vw;
            }
        }
        .row2{
            position: fixed;
            left: 20px;
            right: 20px;
            margin-top: 110px;
        }
    }
`;