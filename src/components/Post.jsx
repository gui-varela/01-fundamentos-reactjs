import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/gui-varela.png" />

          <div className={styles.authorInfo}>
            <strong>Guilherme Varela</strong>
            <span>Full-Stack Dev</span>
          </div>
        </div>

        <time 
          title='11 de maio às 01:02' 
          dateTime='2023-04-08 01:02:25'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe seu comentário'
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}