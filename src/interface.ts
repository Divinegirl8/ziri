export interface FilledButtonProps {
  backgroundColor: string;
    textColor: string;
    text: string;
    img?: string;
    pathname?: string;
    width: string;
  }

  export interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface UserData {
  fullName: string;
  email?: string;
  id?: string;

}