import { story } from "../stories/story";

export interface task {
    id: number,
    name: string,
    description: string,
    story: story,
    icon: string,
    assignedTo: string,
    //done: boolean,
    created: string,
    dueDate: string,
};