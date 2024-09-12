export type TypeCountrie = {
    countryCode: string;
    name: string;
};

type TypeBorders = {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
};

export type TypePopulation = {
    year: number;
    value: number;
};

export interface ICountryInfo {
    border: {
        commonName: string;
        officialName: string;
        countryCode: string;
        region: string;
        borders: TypeBorders[];
    };
    flag: string;
    population: TypePopulation[];
}
