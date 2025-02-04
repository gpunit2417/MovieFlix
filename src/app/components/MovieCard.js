// import styles from '@/app/styles/common.module.css'
// import Image from "next/image";
// import Link from "next/link";
// const MovieCard = (curElem) => {

//     const {id, type, title, synopsis} = curElem.jawSummary;

//     return (
//         <>
//             <div className={styles.card}>
//                 <div className={styles.card_image}>
//                     <Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={260} height={200} />
//                 </div>
//                 <div className={styles.card_data}>
//                     <h2>{title.substring(0,18)}</h2>
//                     <p>
//                         {`${synopsis.substring(0,66)} ...`}
//                     </p>

//                     <Link href={`/movie/${id}`}>
//                         <button>
//                             Read More
//                         </button>
//                     </Link>
//                 </div>
//             </div>

//         </>
//     );
// };

// export default MovieCard;


import styles from '@/app/styles/common.module.css';
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ episode }) => {
    const { episodeId, title, contextualSynopsis, interestingMoment } = episode;
    // console.log(interestingMoment?._342x192?.webp?.value?.url);

    return (
        <div className={styles.card}>
            <div className={styles.card_image}>                
                <Image
                    src={interestingMoment?._342x192?.webp?.value?.url || "/default-image.jpg"} 
                    alt={title} 
                    width={260} 
                    height={200} 
                />
            </div>
            <div className={styles.card_data}>
                <h2>{title.substring(0, 18)}</h2>
                <p>{contextualSynopsis?.text.substring(0, 66)}...</p>

                <Link href={`/movie/${episodeId}`}>
                    <button>Read More</button>
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;
