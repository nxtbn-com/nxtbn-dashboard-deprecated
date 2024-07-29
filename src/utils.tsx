import { toast } from 'react-toastify';
import { NXCross, NXCheck } from "./icons";


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
};

const boolIndicator = (status: boolean) => (
    status ? <NXCheck className="text-green-500 w-6 h-6" /> : <NXCross className="text-red-500 w-6 h-6" />
);


export { deleteAllCookies, handleRetriveError, boolIndicator };
