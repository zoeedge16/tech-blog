const sequilize = require('../config/connection');

const seed = async () => {
    await sequilize.sync({ force: true });


    process.exit(0);
};

seed();