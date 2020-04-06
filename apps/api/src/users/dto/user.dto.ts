export class CreateRemoteUserDto {
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    password: string
}

export class RemoteUserDto {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string
}