export interface OneMovie {
        adult: boolean;
        backdrop_path: string;
        belongs_to_collection: {
          id: number;
          name: string;
          poster_path: string | null;
          backdrop_path: string | null;
        } | null;
        budget: number;
        genres: Array<{
          id: number;
          name: string;
        }>;
        homepage: string;
        id: number;
        imdb_id: string;
        origin_country: string[];
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        production_companies: Array<{
          id: number;
          name: string;
          logo_path: string | null;
          origin_country: string;
        }>;
        production_countries: Array<{
          iso_3166_1: string;
          name: string;
        }>;
        release_date: string;
        revenue: number;
        runtime: number;
        spoken_languages: Array<{
          iso_639_1: string;
          name: string;
        }>;
        status: string;
        tagline: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }
    