export interface IClient {
    domainName: string;
    callbackUrl: string;
    permissions: IPermission;
    // 3 authentication methods
    face: boolean;
    voice: boolean;
    otp: boolean;
}

export interface IPermission {
    // data it wants to access of a user
    name: boolean;
    phone: boolean;
    username: boolean;
    dob: boolean;
    img: boolean;
    audio: boolean;
}


export interface IClientDetails {
    domainName: string;
    id: string;
    type: string;
}

