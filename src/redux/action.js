export const getLoginAction = (email) => {
    return {
        type: 'GET_LOGIN',
        email
    }
};

export const getCardAction = (name, age, country, indexCard) => {
    return {
        type: 'GET_CARD_INFORMATIONS',
        name,
        age,
        country,
        indexCard
    }
};