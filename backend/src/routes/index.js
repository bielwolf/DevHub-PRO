import userRoutes from './users.js';

export default (app) => {
    app.use(
        '/user', userRoutes
    )
    app.get('/', (req, res) => {
        res.send('Welcome to the API');
    });
};


