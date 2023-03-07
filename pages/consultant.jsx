import Dashboard from '../components/Dashboard'
import {Search} from '../styles/svg/SVGIcons'
import {useEffect, useState} from 'react'
import {server} from '../config'

import AddTherapist, {AddTherapistContext} from '../components/contexts/AddTherapist'

export default () => {
    const [consultantDataMain, setConsultantDataMain] = useState()
    const [consultantData, setConsultantData] = useState()
    const [tableStates, setTableStates] = useState({
        sex: '',
        status: '',
        timeOrder: '',
        name: '',
    })

    useEffect(async () => {
        const req = await fetch(`${server.frontend.url}api/consultants`)
        const consultants = await req.json()

        setConsultantData(consultants)
        setConsultantDataMain(consultants)
    }, [])

    useEffect(() => {
        if(tableStates.sex === '' && tableStates.status === '' && tableStates.name === ''){
            setConsultantData(consultantDataMain)
        }
        else{
            setConsultantData(
                consultantDataMain.filter(
                    ({name, sex, isActive}) => (
                        new RegExp(tableStates.name, 'i').test(name) && (
                            (tableStates.sex !== '')
                            ? sex === tableStates.sex
                            : true
                        ) && (
                            (tableStates.status !== '')
                            ? isActive === (
                                (tableStates.status === 'active')
                                ? true
                                : false
                            )
                            : true
                        )
                    )
                )
            )
        }
    }, [tableStates.sex, tableStates.status, tableStates.name])

    return (
        <AddTherapist consultants = {{currentState: consultantData, updater1: setConsultantDataMain, updater2: setConsultantData}}>
            <Dashboard>
                <div className="row">
                    <div className = 'col-sm-12 my-2'>
                        <h3 className = 'text-capitalize'>Consultant</h3>
                        <div className = 'text-muted'>Manage your therapist</div>
                    </div>
                    <div className = 'col-sm-12 my-2'>
                        <div className="flex-h">
                            <div className = 'ml-auto'>
                                <AddTherapistContext.Consumer>{
                                    ({state, updater}) => (
                                        <button onClick = {() => updater(1)} className="btn btn-success py-3 px-5 text-capitalize">new consultant</button>
                                    )
                                }</AddTherapistContext.Consumer>
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
                                <select onChange = {(e) => setTableStates({...tableStates, sex: e.target.value})} value = {tableStates.sex} className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
                                    <option value="">--- sex ---</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                            </div>
                            <div className="col">
                                <select onChange = {(e) => setTableStates({...tableStates, status: e.target.value})} value = {tableStates.status} className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
                                    <option value="">--- status ---</option>
                                    <option value="active">active</option>
                                    <option value="inactive">inactive</option>
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
                                <select onChange = {(e) => setTableStates({...tableStates, timeOrder: e.target.value})} value = {tableStates.timeOrder} className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
                                    <option value="">--- Create Date ---</option>
                                    <option value="newest">newest</option>
                                    <option value="oldest">oldest</option>
                                </select>
                            </div>
                            <div className="col">
                                <div className="flex-h border overflow-x-auto a-i-c rounded text-capitalize">
                                    <span className = 'ml-3'>
                                        <Search />
                                    </span>
                                    <input onChange = {(e) => setTableStates({...tableStates, name: e.target.value})} value = {tableStates.name} type="text" style = {{width: '90%'}} className = 'p-3 d-block text-muted border-0 outline-0 bg-clear' placeholder = 'Consultant' />
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
                                        <td>Email</td>
                                        <td>Phone</td>
                                        <td>Sex</td>
                                        <td>Category</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>{
                                    (consultantData)
                                    ? (
                                        (consultantData.length > 0)
                                        ? (
                                            consultantData.map(
                                                ({id, name, phone, email, sex, categoryName, isActive}, key) => (
                                                    <tr key = {key}>
                                                        <td>#{id}</td>
                                                        <td className = 'text-capitalize'>{name}</td>
                                                        <td>
                                                            <a className = 'text-primary' href = {`mailto://${email}`}>{email}</a>
                                                        </td>
                                                        <td>
                                                            <a className = 'text-primary' href = {`tel://${phone}`}>{phone}</a>
                                                        </td>
                                                        <td className = 'text-capitalize'>{sex}</td>
                                                        <td>{categoryName}</td>
                                                        <td className = {`text-capitalize text-${isActive ? 'success' : 'danger'}`}>{isActive ? 'active' : 'inactive'}</td>
                                                    </tr>
                                                )
                                            )
                                        )
                                        : (
                                            <tr>
                                                <td colSpan = '7' className = ' p-5 letter-spacing-1 text-center text-capitalize text-muted'>search result empty!</td>
                                            </tr>
                                        )
                                    )
                                    : (
                                        <tr>
                                            <td colSpan = '7' className = ' p-5 letter-spacing-1 text-center'>
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
        </AddTherapist>
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