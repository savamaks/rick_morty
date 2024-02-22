import  { ChangeEvent, FC, useEffect } from "react";
import styled from "styled-components";
import { IPropsFilter } from "../types/interface";
import { useAppDispatch } from "../reducer/store";
import { changeFilter } from "../reducer/appSlice";

const Cont = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Select = styled.select`
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: inherit;
    line-height: 1.3;
    padding: 5px 30px 5px;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    appearance: none;
    background: inherit;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;

    &::-ms-expand {
        display: none;
    }
    &:hover {
        border-color: #888;
    }
    &:focus {
        border-color: #aaa;
        box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
        box-shadow: 0 0 0 3px -moz-mac-focusring;
        color: inherit;
    }
    @media (max-width: 860px) {
        font-size: 14px;
    }
    @media (prefers-color-scheme: light) {
        border-color: #f2f2f2;
    }
`;
const Option = styled.option`
    background: #424242;
    padding: 20px;
    @media (max-width: 860px) {
        font-size: 16px;
    }
    @media (prefers-color-scheme: light) {
        background: #d2d2d2;
    }
`;
const Title = styled.h3`
    text-transform: uppercase;
`;

interface TPropsFilter {
    el: IPropsFilter;
}
const Filter:FC<TPropsFilter> = ({ el }) => {
    const dispatch = useAppDispatch();

    const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        dispatch(changeFilter({ title: el.title, option: e.target.value }));
    };

    useEffect(() => {
        dispatch(changeFilter({ title: el.title, option: "All" }));
    }, []);
    return (
        <Cont>
            <Title>{el.title}</Title>
            <Select defaultValue="All" onChange={changeSelect}>
                {el.options.map((title: string, index: number) => {
                    return <Option key={index}>{title}</Option>;
                })}
            </Select>
        </Cont>
    );
};

export default Filter;
