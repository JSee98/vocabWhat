"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseMigrationConfig = exports.DataBaseConfig = void 0;
const typeorm_1 = require("typeorm");
exports.DataBaseConfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    entities: ['dist/**/*.entity.js'],
};
exports.DataBaseMigrationConfig = Object.assign(Object.assign({}, exports.DataBaseConfig), { migrations: ['migrations/*'] });
const cliDataSource = new typeorm_1.DataSource(exports.DataBaseMigrationConfig);
exports.default = cliDataSource;
//# sourceMappingURL=init.db.js.map