import Dashboard from '../components/Dashboard'
import {Search} from '../styles/svg/SVGIcons'
import {useState, useEffect} from 'react'
import {server} from '../config'

import UploadEvent, {UploadEventContext} from '../components/contexts/UploadEvent'

export default () => {
    const [eventsDataMain, setEventsDataMain] = useState()
    const [eventsData, setEventsData] = useState()
    const [tableStates, UpdateTableState] = useState({
        name: '',
        date: '',
        status: '',
        timeOrder: '',
    })

    useEffect(async () => {
        const req = await fetch(`${server.frontend.url}api/events`)
        const data = await req.json()

        setEventsData(data)
        setEventsDataMain(data)
        console.log(data)
    }, [])

    useEffect(() => {
        if(tableStates.status === '' && tableStates.name === ''){
            setEventsData(eventsDataMain)
        }
        else{
            setEventsData(
                eventsDataMain.filter(
                    ({name, date, status}) => (
                        new RegExp(tableStates.name, 'i').test(name) && (
                            (tableStates.status !== '')
                            ? status.toString().toLowerCase() === tableStates.status
                            : true
                        )
                    )
                )
            )
        }
    }, [tableStates.status, tableStates.name])

    return (
        <UploadEvent events = {{currentState: eventsDataMain, updater1: setEventsDataMain, updater2: setEventsData
        }}>        
            <Dashboard>
                <div className="row">
                    <div className = 'col-sm-12 my-2'>
                        <h3 className = 'text-capitalize'>Community events</h3>
                        <div className = 'text-muted'>Manage the community events</div>
                    </div>
                    <div className = 'col-sm-12 my-2'>
                        <div className="flex-h">
                            <div className = 'ml-auto'>
                                <UploadEventContext.Consumer>{
                                    ({state, updater}) => (
                                        <button onClick = {() => {
                                            updater(1)
                                        }} className="btn btn-success py-3 px-5 text-capitalize">upload event</button>
                                    )
                                }</UploadEventContext.Consumer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row j-c-space-between py-4">
                    <div className="col-md-12 col-lg-6 my-2">
                        <div className = 'row a-i-c'>
                            <div className="col-auto text-muted">
                                <span>Filter by:</span>
                            </div>
                            <div className="col">
                                <select onChange = {(e) => UpdateTableState({...tableStates, status: e.target.value})} value = {tableStates.status} className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
                                    <option value="">--- status ---</option>
                                    <option value="upcoming">upcoming</option>
                                    <option value="coming soon">coming soon</option>
                                </select>
                            </div>
                            <div className="col">
                                <select className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
                                    <option value="">date</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 my-2">
                        <div className = 'row a-i-c'>
                            <div className="col-auto text-muted">
                                <span>Sort by:</span>
                            </div>
                            <div className="col-auto">
                                <select className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
                                    <option value="">newest</option>
                                </select>
                            </div>
                            <div className="col">
                                <div className="flex-h border overflow-x-auto a-i-c rounded text-capitalize">
                                    <span className = 'ml-3'>
                                        <Search />
                                    </span>
                                    <input onChange = {(e) => UpdateTableState({...tableStates, name: e.target.value})} value = {tableStates.name} type="text" style = {{width: '90%'}} className = 'p-3 d-block text-muted border-0 outline-0 bg-clear' placeholder = 'Event' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead className = 'border-bottom bg-light-deep shadow-sm'>
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Time</td>
                                        <td>Date</td>
                                        <td>Address</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>{
                                    (eventsData)
                                    ? (
                                        (eventsData.length > 0)
                                        ? (
                                            eventsData.map(
                                                ({id, time, name, address, date, status}, key) => (
                                                    <tr key = {key}>
                                                        <td>#{id}</td>
                                                        <td>{name}</td>
                                                        <td>{time}</td>
                                                        <td>{date}</td>
                                                        <td>{address}</td>
                                                        <td>{status}</td>
                                                    </tr>
                                                )
                                            )
                                        )
                                        : (
                                            <tr>
                                                <td colSpan = '6' className = ' p-5 letter-spacing-1 text-center text-capitalize text-muted'>search result empty!</td>
                                            </tr>
                                        )
                                    )
                                    : (
                                        <tr>
                                            <td colSpan = '6' className = ' p-5 letter-spacing-1 text-center'>
                                                <span className = 'fa fa-spinner fa-spin fa-3x text-muted'></span>
                                            </td>
                                        </tr>
                                    )
                                }</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Dashboard>
        </UploadEvent>
    )
}

export const getServerSideProps = (context) => {
    const {req: {cookies}} = context

    if(!cookies['BAREMIND_ADMIN']){
        return {
            redirect: {
                destination: '/'
            } 
        }
    }

    return {
        props: {
            userData: JSON.parse(cookies['BAREMIND_ADMIN'])
        }
    }
}