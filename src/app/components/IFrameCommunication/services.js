const fetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ some: 'data' });
        }, 500);
    });
};

export default {
    fetch,
};
