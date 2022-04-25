export interface story{
    id: number,
    name: string,
    owner: string,
    description: string,
    epicId: number,
    icon: string,
    assignedTo: string[],
    points: number,
    due: string,
    started: string,
    status: string,
};
