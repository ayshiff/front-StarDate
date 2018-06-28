export const getLoginAction = (email) => {
    return {
        type: 'GET_LOGIN',
        email
    }
};

export const getProfileAction = (id) => {
    return {
        type: 'PROFILE',
        id
    }
};
