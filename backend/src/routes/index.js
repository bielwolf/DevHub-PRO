import userRoutes from './users.js';

export default (app) => {
    app.use (
        '/user', userRoutes,
    )
}

