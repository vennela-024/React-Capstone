import { useContext, useState, useEffect} from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import styles from './GenrePage.module.css'
import defaultGenres from '../data/genres'

function GenrePage() {
const [error, setError] = useState();
const {selectedGenres, setSelectedGenres} = useContext(AppContext)
const navigate = useNavigate();

useEffect(()=>{
  if(selectedGenres.length >= 3){
    setError(false);
  }
}, [selectedGenres])

const handleSelectedGenre = (genre) => {
  if(selectedGenres.includes(genre)){
    //pop operation
    setSelectedGenres(
      selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
    );
  } else {
    //push operation
    setSelectedGenres([...selectedGenres, genre]);
  }
};

const handleNext = () => {
  if(selectedGenres.length < 3){
    setError(true)
  } else{
    navigate("/carousel")
  }
}

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h2 className={styles.heading}>Super app</h2>
            <h1 className={styles.subHeading}>Choose your entertainment category</h1>
            <div className={styles.selectedGenres}>
                {selectedGenres.map((genre, index)=> (
                    <div key={index}
                    className={styles.selectedGenre}
                    onClick={()=>handleSelectedGenre(genre)}>{genre}</div>
                ))}
            </div>
            {error && <p className={styles.error}>Minimum 3 category required</p>}
        </div>
        <div className={styles.right}>
          <div className={styles.genres}>
            {defaultGenres.map((genre, index)=>(
              <div 
              key={index} 
              className={styles.genre}
              onClick={()=>{
                handleSelectedGenre(genre);
              }}
              >{genre}</div>
            ))}
          </div>
          <button onClick={handleNext}>Next Page</button>
        </div>
    </div>
  )
}

export default GenrePage;