interface IResponse {
    users: IUser[],
    total: number,
    skip: number,
    limit: number
}

type UserGender = 'male' | 'female';

type UserHair = {
    color: string,
    type: string
}

type ImageLink = string;

type Coordinates = {
    lat: number,
    lng: number
}

interface IUserAddress {
    address: string,
    city: string,
    coordinates: Coordinates,
    postalCode: string,
    state: string
}

interface IUserBank {
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string
}

interface IUserCompany {
    addres: IUserAddress,
    department: string,
    name: string,
    title: string
}

interface IUserCrypto {
    coin: string,
    wallet: string,
    network: string
}

interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: UserGender,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: ImageLink,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: UserHair,
    domain: string,
    ip: string,
    address: IUserAddress,
    macAddress: string,
    university: string,
    bank: IUserBank,
    company: IUserCompany,
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: IUserCrypto
}

export {IResponse}