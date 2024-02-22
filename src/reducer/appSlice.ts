import {  createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getData } from "../api/getData";
import { Character, Info } from "../types/interface";

export interface IStateReducer {
    loading: boolean;
    error: boolean;
    dataInfo: Info | null;
    personFullCard: Character | null;
    status: string;
    gender: string;
    species: string;
    ids: Array<number>;
    entities:any;
}

const dataPerson = createEntityAdapter({
    selectId: (entity: Character) => entity.id,
    sortComparer: false,
});

const initialState: IStateReducer = dataPerson.getInitialState({
    dataInfo: null,
    loading: false,
    error: false,
    personFullCard: null,
    status: "All",
    gender: "All",
    species: "All",
});

const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        changePesronFullCard(state, action) {
            state.personFullCard = action.payload;
        },
        changeFilter(state: any, action) {
            const title = action.payload.title;
            const option = action.payload.option;

            state[title] = option;
        },
    },

    extraReducers(builder) {
        builder.addCase(getData.pending, (state) => {
            state.loading = true;
            state.error = false;
        }),
            builder.addCase(getData.fulfilled, (state: any, action) => {
                dataPerson.addMany(state, action.payload.results);

                state.dataInfo = action.payload.info;
                state.loading = false;
                state.error = false;
            }),
            builder.addCase(getData.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
    },
});
export default appSlice.reducer;

export const selectors = dataPerson.getSelectors((state: any) => state.booksApiSlice);

export const { changePesronFullCard, changeFilter } = appSlice.actions;
