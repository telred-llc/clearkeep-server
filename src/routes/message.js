import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const messages = await req.context.models.Message.find();
  return res.send(messages);
});

router.get('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findById(
    req.params.messageId,
  );
  return res.send(message);
});

router.post('/', async (req, res) => {
  const message = await req.context.models.Message.create({
    token: req.body.token,
    passphrase: req.body.passphrase,
  });

  return res.send(message);
});

router.delete('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findById(
    req.params.messageId,
  );

  let result = null;
  if (message) {
    result = await message.remove();
  }

  return res.send(result);
});

export default router;
