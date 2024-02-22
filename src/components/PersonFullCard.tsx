import { MouseEvent } from "react";
import styled, { keyframes } from "styled-components";
import { changePesronFullCard } from "../reducer/appSlice";
import { useAppDispatch, useAppSelector } from "../reducer/store";
import close from "/krestik.svg";

const transform = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Modal = styled.section`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #1b1b1bd5;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${transform} 0.3s ease;

`;
const CloseButton = styled.button`
    position: absolute;
    top: 5%;
    right: 5%;
    border: none;
    background: none;
`;
const ImageClose = styled.img`
    width: 30px;
    height: 30px;
`;

const Card = styled.div`
    background: #1a1a1a;
    padding: 30px 40px;
    border-radius: 20px;
    border: 1px solid #f2f2f2;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 75%;
    max-width: 450px;

    @media (prefers-color-scheme: light) {
        background: #f2f2f2;
    }
`;

const Image = styled.img``;

const Title = styled.h2``;
const Text = styled.p`
    align-self: flex-start;
`;

const PersonFullCard = () => {
    const dispatch = useAppDispatch();
    const { personFullCard } = useAppSelector((state) => state.appSlice);

    const closeFullCard = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(changePesronFullCard(null));
    };
    if (personFullCard !== null) {
        return (
            <Modal onClick={closeFullCard}>
                <CloseButton onClick={closeFullCard}>
                    <ImageClose src={close} alt="close" />
                </CloseButton>
                <Card
                    onClick={(e: MouseEvent<HTMLDivElement>) => {
                        e.stopPropagation();
                    }}
                >
                    <Image src={personFullCard.image} alt={personFullCard.name} />
                    <Title>{personFullCard.name}</Title>
                    <Text><strong>Gender:</strong> {personFullCard.gender}</Text>
                    <Text><strong>Species:</strong> {personFullCard.species}</Text>
                    <Text><strong>Status:</strong> {personFullCard.status}</Text>
                    <Text><strong>Location:</strong> {personFullCard.location.name}</Text>
                </Card>
            </Modal>
        );
    } else {
        return null;
    }
};

export default PersonFullCard;
