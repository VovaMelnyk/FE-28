export interface Todo {
    text: string
    id: number
}

export const ADD = "@todo/ADD";
export const DELETE = "@todo/DELETE";

interface AddItem {
    type: typeof ADD,
    payload: Todo
}

interface DeleteItem {
    type: typeof DELETE,
    payload: number
}

export type TodoActionsInterface = AddItem | DeleteItem