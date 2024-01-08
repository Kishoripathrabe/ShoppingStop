export class AuthUtils {
  private static authToken = 'auth token';
  private static userType = 'user type';

  static getAuthToken() {
    return localStorage.getItem(AuthUtils.authToken);
  }

  static setAuthToken(value:any) {
    localStorage.setItem(AuthUtils.authToken, value);
  }

  static removeAuthToken() {
    localStorage.removeItem(AuthUtils.authToken);
  }
  
  static getUserType() {
    return localStorage.getItem(AuthUtils.userType);
  }

  static setUserType(value:any) {
    localStorage.setItem(AuthUtils.userType, value);
  }

  static removeUserType() {
    localStorage.removeItem(AuthUtils.userType);
  }
}
