module.exports = {
  clientId: 'f1d54d20-652d-4b3a-aa65-515a5fba5f05',
  obfuscatedClientSecret: 'U2FsdGVkX18U97hNio9I9jjRXNLBnxIU/4xEwoFOukQLkIVEN1W0N8Fxq2Vl6+FPqgVJAn4Fu2yiIWhckWoZGA==',
  redirectUri: 'http://localhost',
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',
  scope: 'user.read files.read.all offline_access',
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
