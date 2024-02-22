export interface CharacterLocation {
    name: string;
    url: string;
}

export interface ResourceBase {
    id: number;
    name: string;
    url: string;
    created: string;
}



export interface CharacterFilter {
    name?: string;
    type?: string;
    species?: string;
    /**
     * 'Dead' | 'Alive' | 'unknown'
     */
    status?: string;
    /**
     * 'Female' | 'Male' | 'Genderless' | 'unknown'
     */
    gender?: string;
    page?: number;
}


export interface Character extends ResourceBase {
    status: "Dead" | "Alive" | "unknown";
    species: string;
    type: string;
    gender: "Female" | "Male" | "Genderless" | "unknown";
    origin: CharacterLocation;
    location: CharacterLocation;
    image: string;
    episode: string[];
}


export interface Info {
    /**
     * The API will automatically paginate the responses. You will receive up to `20` documents per page.
     */

    /** The length of the response */
    count: number;
    /** The amount of pages */
    pages: number;
    /** Link to the next page (if it exists) */
    next: string | null;
    /** Link to the previous page (if it exists) */
    prev: string | null;
}

export interface IPropsFilter {
    title: string;
    options: Array<string>;
}
