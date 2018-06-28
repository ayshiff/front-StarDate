export const getLoginAction = (email, id) => {
    return {
        type: 'GET_LOGIN',
        email,
        id
    }
};

export const getProfileAction = (id) => {
    return {
        type: 'PROFILE',
        id
    }
};
