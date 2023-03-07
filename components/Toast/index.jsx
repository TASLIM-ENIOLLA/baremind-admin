import {createContext, useState} from 'react'

export const ToastContext = createContext()

export default ({children}) => {
    const [toast, _setToast] = useState({
        'message': 'Default toast message',
        'theme': 'success',
    })

    return (
        <ToastContext.Provider value = {(obj) => {
            _setToast({
                ...toast,
                ...{obj}
            })
        }}>
            <div className = {`mb-4 rounded-1x px-3 py-4 bg-light-${toast.theme} text-${toast.theme}`}>
                {toast.message}
            </div>
            {children}
            <style jsx>{`
                .bg-light-danger{
                    background: #e844443a;
                }
                .bg-light-success{
                    background: #1fef973a;
                }
            `}</style>
        </ToastContext.Provider>
    )
}