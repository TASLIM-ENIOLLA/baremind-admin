import {useState}  from 'react'
import {server}    from '../config'
import {notify}    from '../components/Popups'
import {useCookie} from '../functions/cookies'

export default function Login () {
    const [formData, setFormData] = useState({
        email: 'malhodi@bruiz.dev',
        password: '11111111'
    })

    return (
        <div className = 'vh100 vw100 overflow-y-auto hero-bg flex-v'>
            <div className = 'p-4 w-100'>
                <img src="/img/logo.png" width = '60' />
            </div>
            <div className="flex-1 flex-h container">
                <div className="row flex-1 flex-1 a-i-c p-md-4 p-sm-3">
                    <div className="col-lg-7 text-c text-white">
                        <h1 className = 'text-capitalize bold'>bare mind admin</h1>
                        <p className = 'text-capitalize'>beyond limiting thoughts</p>
                    </div>
                    <div className="col-lg-5">
                        <div className = 'login-bg p-5 mb-5 shadow rounded-2x'>
                            <div className = 'py-3'>
                                <h3 className = 'text-dark bold'>Welcome back</h3>
                                <p className = 'text-muted'>Log in to get started</p>
                                <form onSubmit = {(e) => {
                                    e.preventDefault(),
                                    login(formData)
                                }} className = 'py-4'>
                                    <div className = 'pb-4'>
                                        <span className = 'text-muted d-inline-block pb-1'>Email address</span>
                                        <input value = {formData.email} onChange = {e => setFormData({...formData, email: e.target.value})} type="text" name = 'email' className = 'd-block w-100 border-0 p-3 shadow-sm bg-light rounded' />
                                    </div>
                                    <div className = 'pb-4'>
                                        <span className = 'text-muted d-inline-block pb-1'>Password</span>
                                        <input name = 'password' value = {formData.password} onChange = {e => setFormData({...formData, password: e.target.value})} type="password" className = 'd-block w-100 border-0 p-3 shadow-sm bg-light rounded' />
                                        <p className = 'text-right'>
                                            <a href = '/forgot-password' style = {{color: '#118d5d'}} className = 'd-inline-block pt-3'>Forgot password?</a>
                                        </p>
                                    </div>
                                    <div className = 'pt-3'>
                                        <input style = {{fontWeight: 'bold', fontSize: '1.2rem'}} value = "Log in" type="submit" className = 'd-block w-100 border-0 p-3 shadow btn flicker text-light bg-action rounded' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const login = async (formData) => {
    const req = await fetch(`./api/log-in`, {method: 'POST', body: JSON.stringify(formData)})
    const {type, data} = await req.json()
    const {setCookie} = useCookie()

    notify({
        message: (
            (type === 'success')
            ? 'Login successful, redirecting...'
            : data
        ),
        type: type === 'error' ? 'danger' : type,
        callback: () => {
            if(type === 'success'){
                setCookie({
                    name: 'BAREMIND_ADMIN',
                    value: JSON.stringify(data),
                    expires: new Date(new Date().getTime() + (3600 * 24 * 365 * 1000)),
                    path: '/'
                }).then(() => window.location = '/home')
            }
        }
    })
}

export const getServerSideProps = (context) => {
    const {req: {cookies}} = context

    if(cookies['BAREMIND_ADMIN']){
        return {
            redirect: {
                destination: '/home'
            } 
        }
    }

    return {
        props: {}
    }
}
