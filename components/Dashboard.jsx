import {Notification} from '../styles/svg/SVGIcons'
import {useRouter} from 'next/router'
import Head from 'next/head'
import {useState, createContext} from 'react'

const SideBarContext = createContext()

const URL = [
    {path: '/home', title: 'home', icon: 'house-fill'},
    {path: '/users', title: 'user management', icon: 'person-fill'},
    {path: '/creators', title: 'creators', icon: 'file-earmark-person-fill'},
    {path: '/content', title: 'content', icon: 'card-heading'},
    {path: '/consultant', title: 'consultant', icon: 'person-workspace'},
    {path: '/event', title: 'event', icon: 'people-fill'}
]

const NotificationBox = ({notification}) => {
    return (
        <div className = 'po-rel cursor-pointer mx-4'>
            <span className = 'bi bi-bell-fill text-muted-light'></span>{
                (notification)
                ? (
                    <span style = {{top: '-12px', left: '10px'}} className = 'po-abs scale-small bi bi-circle-fill text-success'></span>
               )
                : <></>
            }
            <style jsx>{`
                .scale-small{
                    transform: scale(.3);
                }
                .text-muted-light{
                    color: rgba(210,210,210,1);
                }
            `}</style>
        </div>
    )
}

const firstLetterToUpperCase = (str) => {
    str = str.split('')
    str[0] = str[0].toString().toUpperCase()

    return str.join('')
}

const SideBar = ({sideBarState, setSideBarState}) => {
    const {route} = useRouter()

    return (
        <>
            <div className = {`${(sideBarState) ? 'translate-0' : 'translate-negative-100'} transit po-abs top-0 left-0 theme-bg h-100 overflow-y-auto`} style = {{zIndex: '1000', minWidth: '230px'}}>
                <div className = 'py-5 px-4 flex-h a-i-c j-c-space-between'>
                    <div>
                        <img src="/img/logo.png" width = '60' alt=""/>
                    </div>
                    <div className = 'py-3' onClick = {() => setSideBarState(false)}>
                        <span className = 'fa-3x bi bi-x text-white'></span>
                    </div>
                </div>
                <div className="py-5 side-bar-links overflow-x-0">{
                    URL.map(
                        ({path, title, icon}, key) => (
                            <a key = {key} href = {`./${path}`} className = {`flex-h transit a-i-c px-4 underline-0 py-3 text-white ${(
                                (route === path || new RegExp(`^${path}`, 'i').test(route))
                                ? 'active-menu'
                                : ''
                            )}`}>
                                <span className = {`bi bi-${icon}`}></span>
                                <span className = 'text-capitalize mx-3'>{title}</span>
                            </a>
                        )
                    )
                }</div>
            </div>
            <div className = 'theme-bg col-d-none col-md-d-block h-100 overflow-y-auto' style = {{minWidth: '230px'}}>
                <div className = 'py-5 px-4'>
                    <img src="/img/logo.png" width = '60' alt=""/>
                </div>
                <div className="py-5 side-bar-links overflow-x-0">{
                    URL.map(
                        ({path, title, icon}, key) => (
                            <a key = {key} href = {`./${path}`} className = {`flex-h transit a-i-c px-4 underline-0 py-3 text-white ${(
                                (route === path || new RegExp(path).test(route))
                                ? 'active-menu'
                                : ''
                            )}`}>
                                <span className = {`bi bi-${icon}`}></span>
                                <span className = 'text-capitalize mx-3'>{title}</span>
                            </a>
                        )
                    )
                }</div>
            </div>
            <style jsx>{`
                .side-bar-links > a:hover{
                    transform: translateX(5%);
                }
            `}</style>
        </>
    )
}

export default ({children}) => {
    const [sideBarState, setSideBarState] = useState(false)
    const routee = useRouter()
    const {route} = useRouter()

    return (
        <>
            <Head>
                <title>{`${firstLetterToUpperCase(route.replace(/[\/\]]/g, '').replace('-', ' ').replace(/[\[]/g, ' - '))}`}</title>
            </Head>
            <div className="po-rel vh100 bg-light flex-h vw100">
                <SideBarContext.Provider value = {{value: sideBarState, updater: setSideBarState}}>
                    <SideBarContext.Consumer>{
                        ({value, updater}) => (
                            <SideBar sideBarState = {value} setSideBarState = {updater} />
                        )
                    }</SideBarContext.Consumer>
                </SideBarContext.Provider>
                <div className = 'flex-1 py-4 px-5 h-100 overflow-y-auto'>
                    <div>
                        <div className="flex-h py-3 a-i-c">
                            <div className = 'col-d-block col-md-d-none'>
                                <div className = 'py-3' onClick = {() => setSideBarState(true)}>
                                    <span className = 'fa-3x bi bi-filter-left'></span>
                                </div>
                            </div>
                            <div className = 'ml-auto'>
                                <div className = 'flex-h a-i-c'>
                                    <NotificationBox notification = {true} />
                                    <div style = {{width: '50px', height: '50px'}} className = 'mx-2 shadow-sm rounded-circle shadow border user-image'></div>
                                    <div>
                                        <h5 className = 'text-capitalize text-dark'>Mahlodi Leslie</h5>
                                        <span className = 'text-muted text-capitalize'>Administrator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
                <style>{`
                    .user-image{
                        background-size: cover;
                        background-position: center;
                        background-image: url(/img/user_002.png);
                    }
                    .active-menu{
                        background: rgba(255,255,255,.3)
                    }
                    .bi{
                        font-size: 24px;
                    }
                    .fa-3x{
                        font-size: 3rem;
                    }
                    .translate-negative-100{
                        transform: translateX(-100%);
                    }
                    .translate-0{
                        transform: translateX(0%);
                    }
                `}</style>
            </div>
        </>
    )
}