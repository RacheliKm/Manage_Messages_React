import { UserLogin } from '../types/userLogin'

const userInital: UserLogin = { id: 0,username:'', email: '', name: ''}

const tableIdReducer = (state: UserLogin = userInital, action: any) => {
    switch (action.type) {
        case 'USER_TABLE_ID':
            state=action.data
            break;
    
        default:
            break;
    }

    state={...state}
    return state

}
export default tableIdReducer