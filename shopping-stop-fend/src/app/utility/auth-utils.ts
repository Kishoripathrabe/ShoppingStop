export class AuthUtils {
  private static authToken = 'auth token';
  
  static getAuthToken() {
    return localStorage.getItem(AuthUtils.authToken);
  }

  static setAuthToken(value:any) {
    localStorage.setItem(AuthUtils.authToken, value);
  }

  static removeAuthToken() {
    localStorage.removeItem(AuthUtils.authToken);
  }
}
