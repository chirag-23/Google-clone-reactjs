import styled from "styled-components";

export const Wrapper = styled.div`
        .search-results{
            display: flex;
            flex-wrap: wrap;
            width: 40vw;
            margin: 0 auto;
            padding: 20px;
            a{
                text-decoration: none;
            }
            p{
            display: flex;
            align-items: center;
            font-size: 0.9rem;
            color: #14141499;
            }
            .title{
                font-size: 1.4rem;
                color: blue;
                letter-spacing: 1px;
                :hover{
                    text-decoration: underline;
                }
            }
            .desc{
                font-size: 1.1rem;
                letter-spacing: 0.8px;
                color: #141414;
            }
        }
        .image{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            a{  
                padding: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width: 200px;
                }
                p{
                    text-align: center;
                    font-size: 0.8rem;
                    padding-top: 20px;
                }
            }
        }
        .news{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 60vw;
            margin: 0 auto;
            letter-spacing: 1.5px;
            line-height: 30px;
            .news-results{
                display: flex;
                flex-wrap: wrap;
                width: 26vw;
                padding: 20px 10px;
                margin: 0 auto;
            }
            a{
                text-decoration: none;
                color: #141414;
            }
            .title{
                font-size: 1.3rem;
                color: blue;
            }
            .link{
                font-size: 1rem;
                :hover{
                    text-decoration: underline;
                }
            }
        }
        .videos{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 30px;
            .video-results{
                padding: 20px;
            }
        }

    @media screen and (max-width: 400px){
        margin-top: 130px;
        overflow-y: scroll;
        .search-results{
            width: 90vw;
            padding: 12px;
            p{
                font-size: 0.75rem;
            }
            .title{
                font-size: 1.2rem;
            }
            .desc{
                font-size: 0.9rem;
            }
        }
        .news{
            width: 90vw;
            .news-results{
                width: 100vw;
            }
            .title{
                font-size: 1.1rem;
            }
            .link{
                font-size: 0.9rem;
            }
        }
        .image{
            display: flex;
            flex-wrap: wrap;
            a{
                padding: 15px;
                img{
                    width: auto;
                }
                p{
                    display: none;
                }
            }
        }
    }
`;

export const Content = styled.div`
    
`;