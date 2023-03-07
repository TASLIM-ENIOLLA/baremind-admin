import Dashboard from '../components/Dashboard'
import {Search} from '../styles/svg/SVGIcons'

export default () => {
    return (
        <Dashboard url = '/users'>
            <div className="row">
                <div className = 'col-sm-12 my-2'>
                    <h3 className = 'text-capitalize'>Users</h3>
                    <div className = 'text-muted'>Manage Bare mind account users</div>
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
                                <option value="">language</option>
                            </select>
                        </div>
                        <div className="col">
                            <select className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
                                <option value="">sex</option>
                            </select>
                        </div>
                        <div className="col">
                            <select className = 'text-muted d-block w-100 p-3 bg-clear text-capitalize border rounded'>
                                <option value="">medium</option>
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
                                <input type="text" style = {{width: '90%'}} className = 'p-3 d-block text-muted border-0 outline-0 bg-clear' placeholder = 'User' />
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
                                    <td>Language</td>
                                    <td>Sex</td>
                                    <td>Content</td>
                                    <td>Medium</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>{
                                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map(
                                    (each, key) => (
                                        <tr key = {key}>
                                            <td>#3422</td>
                                            <td>Malhodi Leslie</td>
                                            <td>malhodileslie@gmail.com</td>
                                            <td>English</td>
                                            <td>Male</td>
                                            <td>International</td>
                                            <td>Medium</td>
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