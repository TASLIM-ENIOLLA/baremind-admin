import Dashboard from '../components/Dashboard'
import {Search} from '../styles/svg/SVGIcons'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {server} from '../config'
import {parseFormData} from '../functions'

import AddCreator, {AddCreatorContext} from '../components/contexts/AddCreator' 


export default ({userData}) => {
    const {route} = useRouter()

    const [creatorsDataMain, setCreatorsDataMain] = useState()
    const [creatorsData, setCreatorsData] = useState()
    const [categories, setCategories] = useState([])
    const [tableStates, UpdateTableState] = useState({
        category: '',
        name: '',
        status: '',
        timeOrder: '',
    })
    
    useEffect(async () => {
        const req1 = await fetch(`${server.frontend.url}/api/creators`, {
            method: 'POST',
            body: parseFormData(userData)
        })
        const creators = await req1.json()

        const req2 = await fetch(`${server.frontend.url}/api/categories`)
        const categories = await req2.json()

        setCategories(categories)
        setCreatorsDataMain(creators)
        setCreatorsData(creators)
    }, [])

    useEffect(() => {
        if(tableStates.category === '' && tableStates.status === '' && tableStates.name === ''){
            setCreatorsData(creatorsDataMain)
        }
        else{
            setCreatorsData(
                creatorsDataMain.filter(
                    ({name, category_slug, isActive}) => (
                        new RegExp(tableStates.name, 'i').test(name) && (
                            (tableStates.category !== '')
                            ? category_slug === tableStates.category
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
    }, [tableStates.category, tableStates.status, tableStates.name])

    return (
        <AddCreator creators = {{currentState: creatorsDataMain, updater1: setCreatorsDataMain, updater2: setCreatorsData}}>
            <Dashboard>
                <div className="row">
                    <div className = 'col-sm-12 my-2'>
                        <h3 className = 'text-capitalize'>Creator</h3>
                        <div className = 'text-muted'>Manage your creator info</div>
                    </div>
                    <div className = 'col-sm-12 my-2'>
                        <div className="flex-h">
                            <div className = 'ml-auto'>
                                <AddCreatorContext.Consumer>{
                                    ({state, updater}) => (
                                        <button onClick = {() => {
                                            updater(1)
                                        }} className="btn btn-success py-3 px-5 text-capitalize">add creator</button>
                                    )
                                }</AddCreatorContext.Consumer>
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
                                <select onChange = {(e) => UpdateTableState({
                                    ...tableStates,
                                    category: e.target.value
                                })} value = {tableStates.category} className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
                                    <option value="">--- category ---</option>{
                                        categories.map(
                                            ({isActive, name}, key) => (
                                                (isActive)
                                                ? <option key = {key} value={name.toLowerCase()}>{name}</option>
                                                : <></>
                                            )
                                        )
                                    }
                                </select>
                            </div>
                            <div className="col">
                                <select onChange = {(e) => UpdateTableState({
                                    ...tableStates,
                                    status: e.target.value
                                })} value = {tableStates.status} className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
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
                                <select onChange = {(e) => UpdateTableState({...tableStates, timeOrder: e.target.value})} value = {tableStates.timeOrder} className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
                                    <option value="">--- Creation Date ---</option>
                                    <option value="newest">newest</option>
                                    <option value="oldest">oldest</option>
                                </select>
                            </div>
                            <div className="col">
                                <div className="flex-h border overflow-x-auto a-i-c rounded text-capitalize">
                                    <span className = 'ml-3'>
                                        <Search />
                                    </span>
                                    <input value = {tableStates.name} type="text" style = {{width: '90%'}} className = 'p-3 d-block text-muted border-0 outline-0 bg-clear' placeholder = 'Creator' onChange = {(e) => {
                                        const value = e.target.value

                                        UpdateTableState({
                                            ...tableStates,
                                            name: value
                                        })
                                    }} />
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
                                        <td>Category</td>
                                        <td>Created On</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>{
                                    (creatorsData)
                                    ? (
                                        (creatorsData.length > 0)
                                        ? creatorsData.map(
                                            ({id, name, email, phone, category_slug, createdOn, isActive}, key) => (
                                                <tr key = {key}>
                                                    <td>{id}</td>
                                                    <td className = 'text-capitalize'>{name}</td>
                                                    <td><a className = 'text-primary' href = {`mailto://${email}`}>{email}</a></td>
                                                    <td><a className = 'text-primary' href = {`tel://${phone}`}>{phone}</a></td>
                                                    <td className = 'text-capitalize'>{category_slug && category_slug.length > 0 ? category_slug : '---'}</td>
                                                    <td>{new Date(createdOn).toLocaleDateString()} {new Date(createdOn).toLocaleTimeString()}</td>
                                                    <td className = {`text-capitalize text-${(isActive) ? 'success' : 'danger'}`}>{(isActive) ? 'active' : 'inactive'}</td>
                                                </tr>
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
        </AddCreator>
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