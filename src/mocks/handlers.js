import { rest } from "msw";

const urlApi = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.get(urlApi, async (req, res, ctx) => {
    const resp = res(
      ctx.json([
        {
          _id: "61871f2936ad452a8380bfb1",
          name: "Nao",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nao_Robot_%28Robocup_2016%29.jpg/1200px-Nao_Robot_%28Robocup_2016%29.jpg",
          speed: 5,
          resiliency: 5,
          creationDate: "2021-11-15T02:24:00.000Z",
          __v: 0,
        },
        {
          _id: "61871f4e36ad452a8380bfb4",
          name: "Ruko",
          image:
            "https://m.media-amazon.com/images/I/616gY8nYY7L._AC_SX425_.jpg",
          speed: 5,
          resiliency: 5,
          creationDate: "2021-11-15T02:24:00.000Z",
          __v: 0,
        },
        {
          _id: "61871f6c36ad452a8380bfb7",
          name: "Robot in red",
          image:
            "https://www.zdnet.com/a/hub/i/2021/02/13/25176f85-a74c-47db-8c39-be4245c9d008/istock-1216869281.jpg",
          speed: 5,
          resiliency: 5,
          creationDate: "2021-11-15T02:24:00.000Z",
          __v: 0,
        },
        {
          _id: "61871f9536ad452a8380bfb9",
          name: "Nao",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nao_Robot_%28Robocup_2016%29.jpg/1200px-Nao_Robot_%28Robocup_2016%29.jpg",
          speed: 5,
          resiliency: 5,
          creationDate: "2021-11-15T02:24:00.000Z",
          __v: 0,
        },
      ])
    );
    return resp;
  }),
];
