import Dashboard from '../components/Dashboard'
import {Search} from '../styles/svg/SVGIcons'

import AddContent, {AddContentContext} from '../components/contexts/AddContent'

export default () => {
    return (
        <AddContent>
            <Dashboard>
                <div className="row">
                    <div className = 'col-sm-12 my-2'>
                        <h3 className = 'text-capitalize'>Content</h3>
                        <div className = 'text-muted'>Manage Baremind content</div>
                    </div>
                    <div className = 'col-sm-12 my-2'>
                        <div className="flex-h">
                            <div className = 'ml-auto'>
                                <AddContentContext.Consumer>{
                                    ({updater}) => (
                                        <button onClick = {() => updater(1)} className="btn btn-success py-3 px-5 text-capitalize">upload content</button>
                                    )
                                }</AddContentContext.Consumer>
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
                                <select className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
                                    <option value="">category</option>
                                </select>
                            </div>
                            <div className="col">
                                <select className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
                                    <option value="">medium</option>
                                </select>
                            </div>
                            <div className="col">
                                <select className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
                                    <option value="">duration</option>
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
                                    <input type="text" style = {{width: '90%'}} className = 'p-3 d-block text-muted border-0 outline-0 bg-clear' placeholder = 'Content' />
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
                                        <td>Name</td>
                                        <td>Medium</td>
                                        <td>Creator</td>
                                        <td>Created on</td>
                                        <td>Category</td>
                                        <td>Duration</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>{
                                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map(
                                        (each, key) => (
                                            <tr key = {key}>
                                                <td>Intro to mindfulness</td>
                                                <td>Video</td>
                                                <td>Malhodi Leslie</td>
                                                <td>23 May 2022</td>
                                                <td>Meditation</td>
                                                <td>20 mins</td>
                                                <td>Active</td>
                                            </tr>
                                        )
                                    )
                                }</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Dashboard>
        </AddContent>
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