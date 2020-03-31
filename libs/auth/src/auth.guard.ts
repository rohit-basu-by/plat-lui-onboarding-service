import { Injectable, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Reflector } from "@nestjs/core";

@Injectable()
export class AADAuthGaurd extends AuthGuard("oauth-bearer") {
  constructor(private readonly reflector: Reflector) {
    super();
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);
    const request = await context.switchToHttp().getRequest();
    const scopes = this.reflector.getAllAndMerge<string[]>("scopes", [
      context.getHandler(),
      context.getClass()
    ]);

    if (
      request.user &&
      "scp" in request.user &&
      request.user["scp"].split(" ")[1] === scopes[0]
    ) {
      return true;
    }
    return false;
  }

  handleRequest(err, user, info, context) {
    return user;
  }
}
