import { registerAs } from "@nestjs/config";

const config = {
  identityMetadata:
    "https://cpsconsoledev.b2clogin.com/fd82808a-a296-4e72-8ebb-f1d1ec7ea44a/v2.0/.well-known/openid-configuration",
  clientID: "ab14dde0-26a6-4f2e-9de8-788d34e858e6",
  issuer:
    "https://cpsconsoledev.b2clogin.com/fd82808a-a296-4e72-8ebb-f1d1ec7ea44a/v2.0/",
  audience: "ab14dde0-26a6-4f2e-9de8-788d34e858e6",
  loggingLevel: "info",
  policyName: "B2C_1_cpsconsolewebsigninsignup",
  isB2C: true,
  validateIssuer: true,
  loggingNoPII: true,
  passReqToCallback: false,
  scp: "Notifications.Read"
};
const AZURE_B2C_CONFIG = `azure_b2c_config`;

export default registerAs("AZURE_B2C_CONFIG", () => {
  return config;
});
