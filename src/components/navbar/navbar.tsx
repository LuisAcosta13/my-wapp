import { useState } from 'react';
import style from './navbar.module.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

interface Props {
    contacts: Array<string>
}

const Navbar = ({contacts}: Props) => {

    let accountCircleRoundedIcon: JSX.Element = <AccountCircleRoundedIcon/>
    let groupsIcon: JSX.Element = <GroupsIcon />
    let donutLargeIcon: JSX.Element = <DonutLargeIcon />
    let chatRoundedIcon: JSX.Element = <ChatRoundedIcon />
    let moreVertRoundedIcon: JSX.Element = <MoreVertRoundedIcon/>
    let searchRoundedIcon: JSX.Element = <SearchRoundedIcon/>
    let arrowBackRoundedIcon: JSX.Element = <ArrowBackRoundedIcon/>
    let filterListRoundedIcon: JSX.Element = <FilterListRoundedIcon/>
    

    const [ selectInput, setSelectInput ] = useState(false)

    const [ checked, setChecked ] = useState('')

    const handleCheck = (e: any) =>{
        setChecked(e.target.value);
    };

    const putPlaceholder = () =>{
        (document.getElementById('input_name') as HTMLInputElement).placeholder = 'Busca un chat o inicia uno nuevo.'
        setSelectInput(false)
    }

    const deletePlaceholder = () =>{
        (document.getElementById('input_name') as HTMLInputElement).placeholder = ''
        setSelectInput(true)
    }

    return(
        <div className={style.container}>
            <span className={style.navbar}>
                <div className={style.options}>

                    <span className={style.profileIcon}>{accountCircleRoundedIcon}</span>
                    
                    <div className={style.icons}>
                        <span className={style.eachIcon} data-toggle="tooltip" data-placement="bottom-right" title="Comunidades">{groupsIcon}</span>
                        <span className={style.eachIcon} data-toggle="tooltip" data-placement="bottom-right" title="Estados">{donutLargeIcon}</span>
                        <span className={style.eachIcon} data-toggle="tooltip" data-placement="bottom-right" title="Nuevo chat">{chatRoundedIcon}</span>
                        <span className={style.eachIcon} data-toggle="tooltip" data-placement="bottom-right" title="Menú">{moreVertRoundedIcon}</span>
                    </div>
                </div>
                <div className={style.input_container}>
                    <span className={style.input_subcontainer}>
                        {!selectInput ? 
                            <div className={style.search_icon}>{searchRoundedIcon}</div> 
                            : 
                            <div className={style.arrow_icon}>{arrowBackRoundedIcon}</div>
                        }
                        <input className={style.input} 
                        id='input_name' 
                        type='text' 
                        placeholder={`Busca un chat o inicia uno nuevo.`}
                        data-toggle="tooltip" 
                        data-placement="bottom-right" 
                        title="Cuadro de texto para ingresar la búsqueda"
                        onSelect={deletePlaceholder} onBlur={putPlaceholder}
                        />
                    </span>
                    <label className={style.filter}>
                        <input className={style.filter_button} 
                            type='checkbox'
                            data-toggle="tooltip" data-placement="bottom-right" title="Filtro de chats no leídos"
                        />
                        <div className={style.filter_icon}>
                            <b>{filterListRoundedIcon}</b>
                        </div>
                    </label>
                </div>
            </span>
            <div className={style.contact_container}>
            <div className={style.contact_list}>
                {contacts.map((contact) => 
                    <label className={style.contact_label}>
                        <input className={style.contact_button} type='checkbox' value={contact} checked={checked === contact} onChange={(e) => handleCheck(e)}/>
                        <div className={style.contact}>
                            <span className={style.contact_icon}>{accountCircleRoundedIcon}</span>
                            <div className={style.contact_name_container} data-toggle="tooltip" data-placement="bottom-right" title={contact}>
                                <b className={style.contact_name}>{contact}</b>
                                <b className={style.contact_message}>Mensaje nuevo</b>
                            </div>
                        </div>
                    </label>)
                }
            </div>
            </div>
        </div>
    )
}

export default Navbar