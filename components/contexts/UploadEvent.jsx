import {createContext, useState} from 'react'
import {server} from '../../config'

export const UploadEventContext = createContext({
    state: 0,
    updater: () => true
})

export default ({children, events: {currentState, updater1, updater2}}) => {
    const [visible, setVisible] = useState(0)
    const [formData, setFormData] = useState({
        name: '',
        time: '',
        address: '',
        date: ''
    })
    const [toast, setToast] = useState({
        visible: false,
        message: 'Default toast message',
        theme: 'success',
    })
    
    return (
        <UploadEventContext.Provider value = {{state: visible, updater: setVisible}}>
            <>
                {children}
            </>
            <>{
                (visible !== 0)
                ? (
                    <div className="top-0 bg-dark-lucent z-index-1000 left-0 po-fixed vh100 vw100 overflow-y-auto animated fadeIn">
                        <div className = 'p-5 flex-v a-i-c j-c-c w-100 min-h-100'>
                            <div style = {{maxWidth: `500px`}} className = 'w-100 p-5 po-rel bg-white shadow rounded-2x'>
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
                                            <h4>Upload new event</h4>
                                            <div className = 'pt-5'>{(
                                                (toast.visible)
                                                ? (
                                                    <div className = {`mb-4 rounded-1x px-3 py-4 bg-light-${toast.theme} text-${toast.theme}`}>
                                                        {toast.message}
                                                    </div>
                                                )
                                                : <></>
                                            )}
                                                <input value = {formData.name} onChange = {(e) => setFormData({...formData, name: e.target.value})} type="text" className = 'd-block mb-4 w-100 p-3 border rounded' placeholder = 'Event name' />
                                                <input value = {formData.address} onChange = {(e) => setFormData({...formData, address: e.target.value})} type="address" className = 'd-block mb-4 w-100 p-3 border rounded' placeholder = 'Address' />
                                                <input value = {formData.time} onChange = {(e) => setFormData({...formData, time: e.target.value})} type="time" className = 'd-block mb-4 w-100 p-3 border rounded' placeholder = 'Time' />
                                                <input value = {formData.date} onChange = {(e) => setFormData({...formData, date: e.target.value})} type="date" className = 'd-block mb-4 w-100 p-3 border rounded' placeholder = 'Date' />
                                                <div className = 'row j-c-space-between pt-4'>
                                                    <div className="col-5">
                                                        <button onClick = {(e) => {
                                                            setVisible(0)
                                                            setToast({
                                                                visible: true
                                                            })
                                                        }} className = 'text-capitalize p-3 d-block w-100 border border-5x border-success rounded bg-clear text-success'>cancel</button>
                                                    </div>
                                                    <div className="col-5">
                                                        <button onClick = {async (e) => {
                                                            if(formData.name === ''){
                                                                setToast({
                                                                    visible: true,
                                                                    message: 'Event name cannot be empty!',
                                                                    theme: 'danger'
                                                                })
                                                            }
                                                            else if(formData.time === ''){
                                                                setToast({
                                                                    visible: true,
                                                                    message: 'Event time cannot be empty!',
                                                                    theme: 'danger'
                                                                })
                                                            }
                                                            else if(formData.address === ''){
                                                                setToast({
                                                                    visible: true,
                                                                    message: 'Event address cannot be empty!',
                                                                    theme: 'danger'
                                                                })
                                                            }
                                                            else if(formData.date === ''){
                                                                setToast({
                                                                    visible: true,
                                                                    message: 'Event date cannot be empty!',
                                                                    theme: 'danger'
                                                                })
                                                            }
                                                            else{
                                                                const req = await fetch(`${server.frontend.url}api/event`, {method: 'POST', body: JSON.stringify(formData)})

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
                                                        }} className = 'text-capitalize p-3 d-block w-100 rounded btn btn-success border-0'>upload event</button>
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
                                                    You have successfully added a new event to the bare mind app
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
        </UploadEventContext.Provider>
    )
}