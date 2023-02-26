import style from './home.module.css'
import Navbar from './navbar/navbar'
import Chat from './chat/chat'

const Home: React.FunctionComponent = () => {

    const contacts = [ 
        'Programando', 
        'Juan', 
        'María', 
        'Bernardo', 
        'Alejandro',
        'Cristina', 
        'Claudio', 
        'Rosibel', 
        'Mariano'
    ]

    return(
        <div className={style.container}>
            <div className={style.first}>
                <Navbar contacts={contacts}/>
            </div>
            <div className={style.second}>
                <Chat />
            </div>
        </div>
    )
}

export default Home