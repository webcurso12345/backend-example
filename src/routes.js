import {Router} from 'express';

const router = Router();

router.get('/calculate/:operation', (req, res) => {
  const n1 = Number(req.query.n1);
  const n2 = Number(req.query.n2);
  const {operation} = req.params;

  let result;
  if (operation === 'add') {
    result = n1 + n2;
  } else if (operation === 'sub') {
    result = n1 - n2;
  } else if (operation === 'div') {
    result = n1 / n2;
  } else if (operation === 'multi') {
    result = n1 * n2;
  }
  
  res.json({result});
})

export default router;