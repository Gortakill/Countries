import { getAllCountries } from '@/axios/axios';
import { TypeCountrie } from '@/types/types';
import Link from 'next/link';

export const MainPage = async () => {
    const countries = await getAllCountries();

    return (
        <>
            {countries.map((countrie: TypeCountrie) => (
                <Link
                    href={`/${countrie.countryCode}/${countrie.name}`}
                    key={countrie.countryCode}
                    className="flex flex-col justify-center px-10 py-3 border-2 border-solid border-gray-300 w-1/3 mb-2
                    hover:bg-lime-200 transition-colors duration-200 ease-in-out"
                >
                    <h1 className="text-center">{countrie.name}</h1>
                    <h2 className="text-center">{countrie.countryCode}</h2>
                </Link>
            ))}
        </>
    );
};
