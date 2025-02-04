import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));


    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e6161aabccmsh42f301c7a3fa840p15ebc7jsn00d34de5b4c8',
            'x-rapidapi-host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options); 
    const data = await res.json();
    // Extracting episodes from each season
    const episodes = data.flatMap(season => season.episodes);

    return (
        <section className={styles.movieSection}>
            <div className={styles.container}>
                <h1>Series & Movies</h1>
                <div className={styles.card_section}>
                    {episodes.map((episode) => (
                        <MovieCard key={episode.episodeId} episode={episode} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Movie;