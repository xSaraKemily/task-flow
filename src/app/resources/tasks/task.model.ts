import { UserInterface } from "../user/user.model";

export interface TaskInterFace {
    id: number;
    user_id: number;
    title: string;
    summary: string;
    due_date: string;
}