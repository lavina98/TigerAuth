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
  name: string;
  username: string;
  phone: string;
  dob: string;
  img: string;
}
