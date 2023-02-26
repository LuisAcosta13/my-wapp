import style from './chat.module.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const Chat: React.FunctionComponent = () => {

    let accountCircleRoundedIcon: JSX.Element = <AccountCircleRoundedIcon/>
    let searchRoundedIcon: JSX.Element = <SearchRoundedIcon/>
    let moreVertRoundedIcon: JSX.Element = <MoreVertRoundedIcon/>
    let tagFacesIcon: JSX.Element = <TagFacesIcon/>
    let attachFileIcon: JSX.Element = <AttachFileIcon/>
    let keyboardVoiceIcon: JSX.Element = <KeyboardVoiceIcon/>

    return(
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.profileInfo}>
                <span className={style.profileIcon} data-toggle="tooltip" data-placement="bottom-right" title="Detalles del perfil">{accountCircleRoundedIcon}</span>
                <span className={style.name}>
                    Nombre
                </span></div>
                <div className={style.icons}>
                    <span className={style.eachIcon} data-toggle="tooltip" data-placement="bottom-right" title="Buscar...">{searchRoundedIcon}</span>
                    <span className={style.eachIcon} data-toggle="tooltip" data-placement="bottom-right" title="Menú">{moreVertRoundedIcon}</span>
                </div>
            </div>
            <div className={style.second_container}>
                
            </div>
            <div className={style.third_container}>
                <div className={style.icons_chat}>
                    <span className={style.each_icon_chat}>
                        {tagFacesIcon}
                    </span>
                    <span className={style.each_icon_chat}>
                        {attachFileIcon}
                    </span>
                    
                </div>
                <div className={style.input_container}>
                    <input className={style.input} 
                    id='input_name' 
                    type='text' 
                    placeholder={`Escribe un mensaje aquí`}
                    data-toggle="tooltip" 
                    data-placement="bottom-right" 
                    title="Escribe un mensaje aquí"
                    />
                        
                </div>
                <div className={style.mic_icon}>
                    <span className={style.each_icon_chat}>{keyboardVoiceIcon}</span>
                </div>
            </div>
        </div>
    )
}

export default Chat