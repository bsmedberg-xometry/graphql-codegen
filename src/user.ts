import { IUserResolvers } from "./generated/schema-types";

export class User {
  readonly _id: number;

  constructor(id: number) {
    this._id = id;
  }
}

export const UserResolver: IUserResolvers = {
  id: user => user._id,
  description: user => `User with id ${user._id}.`,

  __resolveReference: (ref, _context, _info) => {
    return new User(ref.id);
  }
};
