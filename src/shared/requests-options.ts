export default {
    headers: {
        Authorization:
            'Bearer ' + process.env.SECRET_TOKEN.trim().replace('Bearer ', ''),
    },
};
