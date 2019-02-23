export interface IClient {
    website: string;
    redirectUrl: string;
    //data it wants to access of a user
    userName: boolean;
    phone: boolean;
    dateOfBirth: boolean;
    profilePicture: boolean;
    authenticationMethod: string;
    clientSecret?: string;
}



