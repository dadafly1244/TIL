import { rest } from "msw";//목api를 만들어주는 친구~! 가로채서 밑에있는 응답값을 내려줌
import { db } from "./db";

export const handlers = [
  rest.get("/user", (req, res, ctx) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        return resolve(res(ctx.status(200), ctx.json(db.user.getAll()[0])));
      }, 1000)
    );
  }),

  rest.put("/update-nickname", (req, res, ctx) => {
    const nickname = req.url.searchParams.get("nickname");
    const updated = db.user.update({
      where: { id: { equals: 1 } }, //데이터의 id가 1과 같은 것을 찾아서~
      data: { nickName: nickname },
    });

    return res(ctx.json(updated));
  }),
];
