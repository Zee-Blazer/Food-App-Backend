import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    allUsers(): object {
        return {
            msg: "Request successful",
            users: { user1: {name: "user1"}, user2: { name: "user2" } }
        };
    }

    @Post()
    createNewUser(): object {
        return {
            msg: "User created",
            user: {}
        }
    }

}
