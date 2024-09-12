import { getCountryInfo } from '@/axios/axios';
import { ICountryInfo } from '@/types/types';
import Link from 'next/link';
import { PopulationChart } from './Chart.component';

interface Props {
    counryCode: string;
    country: string;
}

export const CountryInfo = async ({ counryCode, country }: Props) => {
    const countryInfo: ICountryInfo = await getCountryInfo(counryCode, country);
    return (
        <>
            <section className="flex items-center mt-5">
                <div className="flex flex-col mr-5">
                    <h1 className="text-xl">
                        Country name: {countryInfo.border.commonName}
                    </h1>
                    <h1 className="text-xl">
                        Country code: {countryInfo.border.countryCode}
                    </h1>
                    <h1 className="text-xl">
                        Official name: {countryInfo.border.officialName}
                    </h1>
                    <h1 className="text-xl">
                        Region: {countryInfo.border.region}
                    </h1>
                </div>
                <img
                    src={countryInfo.flag}
                    alt="flag"
                    width={300}
                    className="border-2 border-solid border-black"
                />
            </section>
            <section className="w-full flex flex-col items-center mt-5">
                <h1 className="text-xl mb-3">Border country: </h1>
                {countryInfo.border.borders.map((borderCountry) => (
                    <Link
                        href={`/${borderCountry.countryCode}/${borderCountry.commonName}`}
                        className="flex flex-col border-2 border-solid border-gray-200 w-1/3 items-center
                        py-3 mb-3
                    hover:bg-lime-200 transition-colors duration-200 ease-in-out"
                    >
                        <h1 className="text-xl">
                            Country name: {borderCountry.commonName}
                        </h1>
                        <h1 className="text-xl">
                            Country code: {borderCountry.countryCode}
                        </h1>
                        <h1 className="text-xl">
                            Official name: {borderCountry.officialName}
                        </h1>
                        <h1 className="text-xl">
                            Region: {borderCountry.region}
                        </h1>
                    </Link>
                ))}
            </section>
            <PopulationChart population={countryInfo.population} />
        </>
    );
};
