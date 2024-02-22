import styled from "styled-components";

const Container = styled.div`
    width: 40px;
    height: 40px;
    border: 5px solid #D2D2D2;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    align-self: center;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const Loader = () => {
    return <Container></Container>;
};

export default Loader;
