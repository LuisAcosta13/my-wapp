import style from './chat.module.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import { useState } from 'react';

const Chat: React.FunctionComponent = () => {

    let accountCircleRoundedIcon: JSX.Element = <AccountCircleRoundedIcon/>
    let searchRoundedIcon: JSX.Element = <SearchRoundedIcon/>
    let moreVertRoundedIcon: JSX.Element = <MoreVertRoundedIcon/>
    let tagFacesIcon: JSX.Element = <TagFacesIcon/>
    let attachFileIcon: JSX.Element = <AttachFileIcon/>
    let keyboardVoiceIcon: JSX.Element = <KeyboardVoiceIcon/>
    let doneAllOutlinedIcon: JSX.Element = <DoneAllOutlinedIcon/>

    const [input, setInput] = useState({message: '', time: ''})
    const [chat, setChat] = useState<any[]>([])

    const handleInputChange = (e: any) => {
        setInput({message: e.target.value, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })})
    }

    const handleSubmit = () => {
        setChat([...chat, input] as any)
        setInput({
            message: '', 
            time: ''
        })
    }

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
                <span className={style.scroll}>
                <div className={style.second_subcontainer}>
                    {chat.map(c => 
                    <span className={style.chat_container}>
                        <span className={style.chat_bubble}>
                            {c.message}
                        </span>
                        <span className={style.hour}>
                            {c.time} 
                            <span className={style.check_icon}>
                                {doneAllOutlinedIcon}
                            </span>
                        </span>
                    </span>)}
                </div></span>
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
                    value={input.message}
                    autoComplete="off"
                    onChange={e => handleInputChange(e)}
                    onKeyDown={(e) =>{if(e.key === 'Enter'){handleSubmit()}}}
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