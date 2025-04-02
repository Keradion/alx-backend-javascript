import router from './index.js';
import express from 'express';
const app = express();
const PORT = 1245;

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(PORT, () => {
  console.log('Server running');
});

export default app;