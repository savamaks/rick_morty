import { createAsyncThunk } from "@reduxjs/toolkit";

// export const getData = async (url:string) => {
//     try {
//         const res = await fetch(url, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         const data = res.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };


export const getData = createAsyncThunk("fetchDocument", async (url:string) => {
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (res.status === 200) {
        const data = await res.json();
        return data;
    } else {
        return null;
    }
});
