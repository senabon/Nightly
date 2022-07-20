import { post } from './handling';

export const logout = () => post('auth/logout/', {});