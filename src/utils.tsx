import { toast } from 'react-toastify';


const deleteAllCookies = (): void => {
    const cookies: string[] = document.cookie.split(";");

    cookies.forEach(cookie => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

        // Set the cookie's expiration date to a past date
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });
};

const handleRetriveError = (error: any): void => {
    toast.error("Data fetch failed!");
}

export { deleteAllCookies, handleRetriveError };
