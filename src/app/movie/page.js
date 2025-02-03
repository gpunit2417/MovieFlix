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
    // const main_data = data.titles;
    console.log(data[0].episodes[0],"this is message")

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    {/* <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Movie;