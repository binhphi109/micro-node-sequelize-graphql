import { Router } from 'express';
import { asyncErrorHandler } from '../core/middlewares/errorHandler';
import * as UserController from '../controllers/users';

const router = Router();
  
router.post('/signup', asyncErrorHandler(async function (req, res) {
  const user = req.body;

  const createdUser = await UserController.create(user);

  res.json(createdUser);
}));

router.post('/signin', asyncErrorHandler(async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  
  const result = await UserController.signin(username, password);

  res.json(result);
}));

export default router;
