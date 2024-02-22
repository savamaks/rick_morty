import { ChangeEvent, useEffect, useState } from "react";
import { EntityId } from "@reduxjs/toolkit";
import styled from "styled-components";
import Loader from "../Loader";
import { getData } from "../api/getData";
import { useAppDispatch, useAppSelector } from "../reducer/store";
import PersonCard from "./PersonCard";
import PersonFullCard from "./PersonFullCard";
import Filter from "./Filter";
import { changePesronFullCard } from "../reducer/appSlice";
import { dataFilter } from "../dataFilter";
import { IPropsFilter } from "../types/interface";
import { checkName } from "../handlerFunc/checkName";

const Main = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;
`;
const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;

    gap: 20px;
`;
const Box = styled.div`
    padding: 30px 0 30px 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    width: 100%;
    @media (min-width: 860px) {
        justify-content: center;
    }
`;
const Button = styled.button``;

const Input = styled.input`
    padding: 5px 10px;
    border-radius: 5px;
    min-width: 200px;
    font-size: 16px;
    border: 1px solid #d2d2d2;
    @media (max-width: 860px) {
        width: 95%;
    }
`;
function App() {
    const [search, setSearch] = useState("");

    const dispatch = useAppDispatch();
    const [error, setError] = useState<string | null>();
    const { dataInfo, loading, personFullCard } = useAppSelector((state) => state.appSlice);
    const { status, gender, species } = useAppSelector((state) => state.appSlice);

    const dataPersons = useAppSelector((state) => state.appSlice);

    const LoadContent = async () => {
        dispatch(getData("https://rickandmortyapi.com/api/character/?page=1"));
    };

    const loadMore = () => {
        if (dataInfo !== null) {
            const nextUrl = dataInfo.next;
            if (nextUrl !== null) {
                dispatch(getData(nextUrl));
            }
        }
    };
    useEffect(() => {
        LoadContent();
        dispatch(changePesronFullCard(null));
    }, []);

    useEffect(() => {
        if (dataInfo !== null) {
            setError(dataInfo.next);
        }
    }, [dataInfo]);
    return (
        <Main>
            {personFullCard !== null && <PersonFullCard />}
            <Box>
                <Input
                    type="text"
                    value={search}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setSearch(e.target.value);
                    }}
                    placeholder="enter character name..."
                />
                {dataFilter.map((el: IPropsFilter, index: number) => {
                    return <Filter key={index} el={el} />;
                })}
            </Box>

            <Container>
                {dataPersons.ids.map((id: EntityId, index: number) => {

                    const check = checkName(search, dataPersons.entities[id].name);

                    if (status !== dataPersons.entities[id].status && status !== "All") return;
                    if (gender !== dataPersons.entities[id].gender && gender !== "All") return;
                    if (species !== dataPersons.entities[id].species && species !== "All") return;
                    if (!check && search !== "") return;

                    return <PersonCard key={index} person={dataPersons.entities[id]} />;
                })}
            </Container>

            <Button disabled={loading || error === null} onClick={loadMore}>
                {!loading ? "Load More" : <Loader />}
            </Button>
        </Main>
    );
}

export default App;
