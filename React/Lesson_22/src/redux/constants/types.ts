export interface Todo {
    id: number,
    text: string
}

export const ADD = "@todo/ADD";
export const DELETE = "@todo/DELETE";

interface AddItem {
    type: typeof ADD,
    payload: Todo,
}

interface DeleteItem {
    type: typeof DELETE,
    payload: number
}

export type TodoActionsType = AddItem | DeleteItem