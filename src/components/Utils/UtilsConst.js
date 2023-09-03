
export const formatPrice = price => {
    return new Intl.NumberFormat().format(price);
};

export const URLBASE= "https://back-bike-store.vercel.app"


/*Validation*/

const emailRequest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

const passwordRequest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

export const isEmpty = (value) => value === "";

export const isBetween = (length, min, max) => length > min && length < max;

export const emailValid = (email) => emailRequest.test(email);

export const passwordValid = (password) => passwordRequest.test(password);

export const searchAvatar =(avatarName)=>avatars.find((avatar)=> avatar.name === avatarName);

export const searchUser = (userName,users) => users.length? users.find((user)=>user.userName === userName):undefined;

export const indexProduct =(array, id)=>array.findIndex((product)=>product.id === id)

