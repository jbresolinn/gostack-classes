import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error('Incorrect email/password combination!');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination!');
    }

    const token = sign({}, '3819dea8f1f71e34b8716ae533c81b6c', {
      expiresIn: '1d',
      subject: user.id,
    });

    return {
      token,
    };
  }
}

export default AuthenticateUserService;
