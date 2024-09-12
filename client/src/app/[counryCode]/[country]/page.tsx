import { CountryInfo } from '@/components/CountryInfo/CountryInfo.component';

interface Props {
    params: {
        counryCode: string;
        country: string;
    };
}

export default function ({ params: { counryCode, country } }: Props) {
    console.log(counryCode, country);
    return (
        <main className="flex flex-col items-center">
            <CountryInfo counryCode={counryCode} country={country} />
        </main>
    );
}
