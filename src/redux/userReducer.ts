import { UserLogin } from '../types/userLogin'

const userInital: UserLogin = { id: 0,username:'', email: '', name: ''}

const userReducer = (state: UserLogin = userInital, action: any) => {
    switch (action.type) {
        case 'SHOW_USER':
            state=action.data
            break;
    
        default:
            break;
    }

    state={...state}
    return state

}
export default userReducer