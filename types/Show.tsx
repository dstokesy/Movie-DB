type CollectionType = {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
};

type ProductionCompaniesType = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
};

type ProductionCompaniesListType = ProductionCompaniesType[];

type ProductionCountriesType = {
    iso_3166_1: string;
    name: string;
};

type ProductionCountriesListType = ProductionCountriesType[];

type SpokenLanguagesType = {
    english_name?: string;
    iso_639_1: string;
    name: string;
};

type SpokenLanguagesListType = SpokenLanguagesType[];

export interface IShow {
    adult: boolean;
    backdrop_path?: string;
    belongs_to_collection: CollectionType | null;
    budget?: number;
    genres?: GenreList;
    homepage?: string;
    id: number;
    imdb_id?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies: ProductionCompaniesListType | null;
    production_countries: ProductionCountriesListType | null;
    release_date?: string;
    revenue?: number;
    runtime?: number;
    spoken_languages: SpokenLanguagesListType | null;
    status?: string;
    tagline?: string;
    title: string;
    name?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

export type GenreType = {
    id: number;
    name: string;
};

export type GenreShowsType = {
    id: number;
    name: string;
    shows: IShow[];
};

type GenreList = GenreType[];
