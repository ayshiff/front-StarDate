export const getLoginAction = (email) => {
    return {
        type: 'GET_LOGIN',
        email
    }
};
