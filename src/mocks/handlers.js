import { rest } from "msw";
import { getRobots } from "../factories/robotsFactory";

const urlApi = process.env.REACT_APP_API_URL;

const handlers = [
  rest.get(urlApi, (req, res, ctx) => {
    return res(ctx.json(getRobots()));
  }),
  rest.post(urlApi, (req, res, ctx) => {
    return res(ctx.json({ id: 100, ...req.body }));
  }),
  rest.delete(`${urlApi}:id`, (req, res, ctx) => {
    return res(ctx.json({}));
  }),
];

export default handlers;
