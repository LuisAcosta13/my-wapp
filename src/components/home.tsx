import style from './home.module.css'
import Navbar from './navbar/navbar'

const Home: React.FunctionComponent = () => {
    return(
        <div className={style.container}>
            <div className={style.first}>
                <Navbar/>
            </div>
            <div className={style.second}>
                <div>chat</div>
            </div>
        </div>
    )
}

export default Home