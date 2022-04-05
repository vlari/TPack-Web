import express from 'express';
import venv from './config/env';
import chalk from 'chalk';

const app = express();

app.listen(venv.PORT, () => {
  console.log(chalk.green(`Server running in ${venv.NODE_ENV} environment`));
  console.log(chalk.blue.inverse(`Server running on port: ${venv.PORT}`));
});
