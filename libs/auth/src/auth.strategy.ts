import { BearerStrategy } from "passport-azure-ad";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AzureB2cStrategy extends PassportStrategy(
  BearerStrategy,
  "oauth-bearer"
) {
  constructor(private configService: ConfigService) {
    super({
      identityMetadata: configService.get("identityMetadata"),
      clientID: configService.get("clientID"),
      issuer: configService.get("issuer"),
      audience: configService.get("audience"),
      loggingLevel: configService.get("loggingLevel"),
      policyName: configService.get("policyName"),
      isB2C: configService.get("isB2C"),
      validateIssuer: configService.get("validateIssuer"),
      loggingNoPII: configService.get("loggingNoPII"),
      passReqToCallback: configService.get("passReqToCallback")
    });
  }

  async validate(res: any, done: any) {
    const { oid, given_name, family_name, name, emails, scp } = res;
    const user = { oid, given_name, family_name, name, emails, scp };
    if (!user) {
      return done(new Error("Error!"), null);
    } else {
      return done(null, user);
    }
  }
}
