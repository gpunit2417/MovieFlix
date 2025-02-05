// import React from 'react';
// import styles from "@/app/styles/common.module.css"
// import Image from "next/image";

// const Page = async ({params}) => {
//     const id = params.id;

//     const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505',
//             'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//         }
//     };

//     const res = await fetch(url, options);
//     const data = await res.json();
//     const main_data = data[0].details;

//     return (

//             <div className={styles.container}>
//                 <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type} </span> </h2>
//                 <div className={styles.card_section}>
//                     <div>
//                         <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
//                     </div>
//                     <div>
//                         <h1>{main_data.title}</h1>
//                         <p>{main_data.synopsis}</p>
//                     </div>
//                 </div>
//             </div>

//     );
// };

// export default Page;

import React from 'react';
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const Page = async ({ params }) => {
    const { id } = params;

    const url = `https://netflix54.p.rapidapi.com/season/episodes/?ids=${id}%2C80117715&offset=0&limit=25&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e6161aabccmsh42f301c7a3fa840p15ebc7jsn00d34de5b4c8',
            'x-rapidapi-host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();

    console.log(data);
    
    if (!data || data.length === 0) {
        return <h1 className={styles.error}>No episode found!</h1>;
    }

    // Extract the first episode (since API returns an array)
    const episode = data[0].seasonId; 

    // console.log("'''''''''''''''''''''''''''''''''''''''''''''");
    
    // console.log(episode);
    
    // Extract image URL
    const imageUrl = episode?.interestingMoment?._342x192?.webp?.value?.url || 
                     episode?.backgroundImage?.url || 
                     "/default-image.jpg";

    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title}>Netflix \ <span>{episode?.summary?.type || "Series"}</span></h2>
            <div className={styles.card_section}>
                <div>
                    <Image 
                        src={imageUrl} 
                        alt={episode?.title || "Movie Image"} 
                        width={600} 
                        height={300} 
                        unoptimized // Optional if external images fail
                    />
                </div>
                <div>
                    <h1>{episode?.title}</h1>
                    <p>{episode?.contextualSynopsis?.text}</p>
                </div>
            </div>
        </div>
    );
};

export default Page;

