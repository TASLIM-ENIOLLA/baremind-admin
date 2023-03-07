import {createContext, useState, useEffect} from 'react'
import {server} from '../../config'
import {parseFormData} from '../../functions'

export const AddTherapistContext = createContext({
    state: 0,
    updater: () => true
})

export default ({children, consultants: {currentState, updater1, updater2}}) => {
    const [visible, setVisible] = useState(0)
    const [categories, setCategories] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category: '',
        sex: ''
    })
    const [toast, setToast] = useState({
        visible: false,
        message: 'Default toast message',
        theme: 'success',
    })

    useEffect(async () => {
        const req = await fetch(`${server.frontend.url}/api/categories`)
        const categories = await req.json()

        setCategories(categories)
    }, [])
    
    return (
        <AddTherapistContext.Provider value = {{state: visible, updater: setVisible}}>
            <>
                {children}
            </>
            <>{
                (visible !== 0)
                ? (
                    <div className="top-0 bg-dark-lucent z-index-1000 left-0 po-fixed vh100 vw100 overflow-y-auto animated fadeIn">
                        <div className = 'p-5 flex-v a-i-c j-c-c w-100 min-h-100'>
                            <div style = {{maxWidth: '500px'}} className = 'w-100 p-5 po-rel bg-white shadow rounded-2x'>
                                <div onClick = {(e) => {
                                    setVisible(0)
                                    setToast({
                                        visible: true
                                    })
                                }} className = 'flicker po-abs top-0 right-0 p-4'>
                                    <span className = 'fa-3x bi bi-x text-dark'></span>
                                </div>
                                <>{
                                    (visible === 1)
                                    ? (
                                        <>
                                            <h4>Add a new therapist</h4>
                                            <div className = 'pt-5'>{(
                                                (toast.visible)
                                                ? (
                                                    <div className = {`mb-4 rounded-1x px-3 py-4 bg-light-${toast.theme} text-${toast.theme}`}>
                                                        {toast.message}
                                                    </div>
                                                )
                                                : <></>
                                            )}
                                                <input value = {formData.name} onChange = {(e) => setFormData({...formData, name: e.target.value})} type="text" className = 'd-block mb-4 w-100 p-3 border rounded' placeholder = 'Name' />
                                                <input value = {formData.email} onChange = {(e) => setFormData({...formData, email: e.target.value})} type="email" className = 'd-block mb-4 w-100 p-3 border rounded' placeholder = 'Email' />
                                                <input value = {formData.phone} onChange = {(e) => setFormData({...formData, phone: e.target.value})} type="phone" className = 'd-block mb-4 w-100 p-3 border rounded' placeholder = 'Phone number' />
                                                <select value = {formData.sex} onChange = {(e) => setFormData({...formData, sex: e.target.value})} className = 'd-block w-100 p-3 border mb-4 text-capitalize rounded'>
                                                    <option value="">--- select gender ---</option>
                                                    <option value="male">male</option>
                                                    <option value="female">female</option>
                                                </select>
                                                <select value = {formData.category} onChange = {(e) => setFormData({...formData, category: e.target.value})} className = 'd-block w-100 p-3 border mb-4 text-capitalize rounded'>
                                                    <option value="">--- select category ---</option>{
                                                        categories.map(
                                                            ({isActive, id, name}, key) => (
                                                                (isActive)
                                                                ? <option key = {key} value={String(name).toLowerCase()}>{name}</option>
                                                                : <></>
                                                            )
                                                        )
                                                    }
                                                </select>
                                                <div className = 'row j-c-space-between pt-4'>
                                                    <div className="col-5">
                                                        <button onClick = {(e) => {
                                                            setVisible(0)
                                                            setToast({
                                                                visible: true
                                                            })
                                                        }} className = 'text-capitalize p-3 d-block w-100 border border-5x border-success rounded bg-clear text-success'>cancel</button>
                                                    </div>
                                                    <div onClick = {async (e) => {
                                                        if(formData.name === ''){
                                                            setToast({
                                                                visible: true,
                                                                message: 'Therapist name cannot be empty!',
                                                                theme: 'danger'
                                                            })
                                                        }
                                                        else if(formData.email === ''){
                                                            setToast({
                                                                visible: true,
                                                                message: 'Therapist email cannot be empty!',
                                                                theme: 'danger'
                                                            })
                                                        }
                                                        else if(formData.phone === ''){
                                                            setToast({
                                                                visible: true,
                                                                message: 'Therapist phone cannot be empty!',
                                                                theme: 'danger'
                                                            })
                                                        }
                                                        else if(formData.category === ''){
                                                            setToast({
                                                                visible: true,
                                                                message: 'Therapist category cannot be empty!',
                                                                theme: 'danger'
                                                            })
                                                        }
                                                        else if(formData.sex === ''){
                                                            setToast({
                                                                visible: true,
                                                                message: 'Therapist gender cannot be empty!',
                                                                theme: 'danger'
                                                            })
                                                        }
                                                        else{
                                                            const req = await fetch(`${server.frontend.url}api/consultant`, {method: 'POST', body: parseFormData(formData)})

                                                            if(req.ok){
                                                                const data = await req.json()

                                                                if(!data.error){
                                                                    setVisible(2)
                                                                    updater1([
                                                                        ...currentState,
                                                                        data
                                                                    ])
                                                                    updater2([
                                                                        ...currentState,
                                                                        data
                                                                    ])
                                                                    setFormData({name: '',phone: '',email: '',category: '', sex: ''})

                                                                }
                                                                else{
                                                                    setToast({
                                                                        visible: true,
                                                                        message: data.error,
                                                                        theme: 'danger'
                                                                    })
                                                                }
                                                            }
                                                            else{
                                                                setToast({
                                                                    visible: true,
                                                                    message: 'An error occured, please retry!',
                                                                    theme: 'danger'
                                                                })
                                                            }
                                                        }
                                                    }} className="col-5">
                                                        <button className = 'text-capitalize p-3 d-block w-100 rounded btn btn-success border-0'>add therapist</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                    : (
                                        <>
                                            <h4 className = 'text-center'>Great job!</h4>
                                            <div className = 'py-4'>
                                                <p className = 'text-center fo-s-16 text-muted'>
                                                    You have successfully added a new therapist to the bare mind app
                                                </p>
                                                <button onClick = {(e) => {
                                                    setVisible(0)
                                                    setToast({
                                                        visible: true
                                                    })
                                                }} className = 'text-capitalize mt-4 px-5 mx-auto py-3 d-block btn btn-success rounded'>continue</button>
                                            </div>
                                        </>
                                    )
                                }</>
                            </div>
                        </div>
                    </div>
                )
                : <></>
            }</>
            <style jsx>{`
                .min-h-100{
                    min-height: 100%;
                }
                .z-index-1000{
                    z-index: 10000;
                }
                .bg-dark-lucent{
                    background: rgba(0,0,0,.5)
                }
                .bg-light-danger{
                    background: #e844443a;
                }
                .bg-light-success{
                    background: #1fef973a;
                }
            `}</style>
        </AddTherapistContext.Provider>
    )
}