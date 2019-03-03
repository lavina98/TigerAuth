export interface IUser {
  username: string;
  faceTokenCheck: boolean;
  voiceTokenCheck: boolean;
  otpTokenCheck: boolean;
}

export interface IUserActivity {
  ip: string;
  client: string;
  time: string;
  device: string;
}

export interface IUserModel {
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  dob: string;
  img: string;
}
