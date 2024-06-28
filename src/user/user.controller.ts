import { Body, Controller, Get, Post } from '@nestjs/common';

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
    createNewUser( @Body() user: { username: string, email: string, password: string } ): object {
        return {
            msg: "User created",
            user: user
        }
    }

}
