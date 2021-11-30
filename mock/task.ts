import { Request, Response } from 'express';
import Mock from 'mockjs';

const getTask = (req: Request, res: Response) => {
  res.send({
    code: 0,
    msg: '获取成功',
    kolOffers: [
      {
        id: Mock.mock({ 'number|1000-2000': 1512 }).number,
        time: Mock.mock('@date'),
        icon: Mock.Random.dataImage('110x110', 'Task Icon'),
        title: 'Install xxxx app',
        desc: '',
        country: '',
      },
    ],
  });
};

const getRanks = (req: Request, res: Response) => {};

const getOfferInfo = (req: Request, res: Response) => {};

const getWalletInfo = (req: Request, res: Response) => {};

export default {
  'GET /api/kol/v1/tasks': getTask,
  'GET /api/kol/v1/ranks': getRanks,
  'GET /api/kol/v1/user_offer_info': getOfferInfo,
  'GET /api/kol/v1/take_task': (req: Request, res: Response) => {
    const { offerId, userId } = req.body;
    if (offerId !== undefined && userId !== undefined) {
      res.send({ code: 0, msg: '获取任务成功' });
    } else {
      res.send({ code: -1, msg: '参数错误' });
    }
  },
  'GET /api/kol/v1/cash': (req: Request, res: Response) => {
    const { typ, paymentId, paymentName, amount, userId } = req.body;
    if (typ && paymentId && paymentName && amount && userId) {
      res.send({ code: 0, msg: '获取任务成功' });
    } else {
      res.send({ code: -1, msg: '参数错误' });
    }
  },
  'GET /api/kol/v1/wallet_info': getWalletInfo,
};
