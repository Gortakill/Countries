import axios from 'axios';

const instanse = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

export const getAllCountries = async () => {
    try {
        const response = await instanse.get('countries');
        return response.data;
    } catch (err) {
        console.log(
            'Full URL:',
            `${process.env.NEXT_PUBLIC_BASE_URL}/countries`,
        );
        throw new Error('Failed to load countries');
    }
};

export const getCountryInfo = async (countryCode: string, country: string) => {
    try {
        const response = await instanse.get(
            `countries/${countryCode}/${country}`,
        );
        return response.data;
    } catch {
        throw new Error('Failed to load country info');
    }
};
