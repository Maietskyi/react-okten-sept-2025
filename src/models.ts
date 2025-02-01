export interface User {
    id: number;
    username: string;
    email: string;
    image: string;
    age: number;
    gender: string;
    phone: string;
}

export interface Recipe {
    id: number;
    name: string;
    tags: string[];
    creatorId: number;
    description: string;
}

export interface UsersState {
    items: User[];
    loading: boolean;
    error: string | null;
}