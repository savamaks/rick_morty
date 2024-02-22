import { FC, MouseEvent } from "react";
import { Character } from "../types/interface";
import styled from "styled-components";
import { useAppDispatch } from "../reducer/store";
import { changePesronFullCard } from "../reducer/appSlice";

const Card = styled.div`
    border-radius: 20px;
    display: flex;
    padding-bottom: 20px;
    flex-direction: column;
    cursor: pointer;
    transition: transform 0.3s ease;
    background: #6b6b6b;
    overflow: hidden;
    align-self: stretch;
    align-items: center;
    box-shadow: 3px 3px 6px #b8b8b857;
    &:hover {
        transform: scale(1.02);
    }

    @media (prefers-color-scheme: light) {
        background: #f2f2f2;
    }
`;
const Title = styled.h2`
    max-width: 250px;
`;
const Image = styled.img``;

const Text = styled.p``;

interface IPropsPersonCard {
    person: Character;
}

const PersonCard: FC<IPropsPersonCard> = ({ person }) => {
    const dispatch = useAppDispatch();

    const openFullCard = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        dispatch(changePesronFullCard(person));
    };

    return (
        <Card onClick={openFullCard}>
            <Image src={person.image} alt={person.name} />
            <Title>{person.name}</Title>
            <Text><strong>Status:</strong> {person.status}</Text>
            <Text><strong>Gender:</strong> {person.gender}</Text>
        </Card>
    );
};

export default PersonCard;
