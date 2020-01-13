import {Model} from 'dva';

export interface User {
    userId: string;
    username: string;
    realName: string;
    teamId: string;
}


export interface DvaModel<T> extends Model{
    state: T;
}

