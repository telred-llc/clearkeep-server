import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});

router.get('/:passphrase', async (req, res) => {
  const user = await req.context.models.User.findById(
    req.params.passphrase,
  );
  return res.send(user);
});

export default router;