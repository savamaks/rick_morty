import { IPropsFilter } from "./types/interface";

export const dataFilter: Array<IPropsFilter> = [
    {
        title: "status",
        options: ["Dead", "Alive", "unknown", "All"],
    },
    {
        title: "gender",
        options: ["Female", "Male", "Genderless", "unknown", "All"],
    },

    {
        title: "species",
        options: ["Human", "Alien", "Robot", "Humanoid", "Poopybutthole", "Mythological Creature", "Animal", "Cronenberg", "Disease", "All"],
    },
];
