import {DvaModel, User} from './Types';
import client from '@/api/client';
interface AppState {
    user?: User;
}
const AppModel: DvaModel<AppState> = {

    namespace: 'app',
    state: {},

    reducers:{
        setUser(state: AppState, action): AppState {

            return {...state, user: action.payload.user}
        }
    },
    effects: {
        loadUser: function *(action,{put,call}) {
            let user: User|undefined = undefined;
            try {
                user = yield call(client.get);
            } catch (error) {
                
            }
            put({type: 'loadUser',payload:{user:user}})
        }
    }
};



export default AppModel;