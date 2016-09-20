/**
 * Created by ZhiyuanSun on 16/9/20.
 */
import Express from 'express';

let app = Express();

app.get('/', (req, res) => {
  res.send(`hello world!`);
});

app.listen(4321, () => {
  console.log('server running http://localhost:4321');
});