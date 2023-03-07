import {createContext, useState} from 'react'

export const AddContentContext = createContext({
    state: 0,
    updater: () => true
})

export default ({children}) => {
    const [visible, setVisible] = useState(0)
    
    return (
        <AddContentContext.Provider value = {{state: visible, updater: setVisible}}>
            <>
                {children}
            </>
            <>{
                (visible !== 0)
                ? (
                    <div className="top-0 bg-dark-lucent z-index-1000 left-0 po-fixed vh100 vw100 overflow-y-auto animated fadeIn">
                        <div className = 'p-5 flex-v a-i-c j-c-c w-100 min-h-100'>
                            <div style = {{maxWidth: `${(visible === 1) ? '8' : '5'}00px`}} className = 'w-100 p-5 po-rel bg-white shadow rounded-2x'>
                                <div onClick = {(e) => {
                                    setVisible(0)
                                }} className = 'flicker po-abs top-0 right-0 p-4'>
                                    <span className = 'fa-3x bi bi-x text-dark'></span>
                                </div>
                                <>{
                                    (visible === 1)
                                    ? (
                                        <>
                                            <h4>Add a new content</h4>
                                            <div className = 'pt-5'>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-5">
                                                        <label htmlFor = "FILE_UPLOAD" className="d-block w-100 text-center cursor-pointer btn mb-4 border rounded-1x p-3">
                                                            <input accept = '.doc, .mp4, .wav, .mp3' type="file" id="FILE_UPLOAD" hidden />
                                                            <div className="p-3">
                                                                <span className="fa-5x fa fa-cloud-upload text-success"></span>
                                                            </div>
                                                            <p>Upload your various content here</p>
                                                            <p className="text-muted">File types supported includes: .doc, .mp4, .wav, .mp3</p>
                                                            <p className="disabled text-danger">Not to exceed 400Mb</p>
                                                        </label>
                                                    </div>
                                                    <div className="col-md-12 col-lg-7">
                                                        <input type="text" className = 'd-block mb-4 w-100 p-3 border rounded' placeholder = 'Name' />
                                                        <input type="text" className = 'd-block mb-4 w-100 p-3 border rounded' placeholder = 'Creator name' />
                                                        <input type="time" className = 'd-block mb-4 w-100 p-3 border rounded' placeholder = 'Duration' />
                                                        <select className = 'text-capitalize d-block w-100 p-3 border mb-4 rounded'>
                                                            <option value="">--- select category ---</option>
                                                        </select>
                                                        <select className = 'text-capitalize d-block w-100 p-3 border mb-4 rounded'>
                                                            <option value="">--- select medium ---</option>
                                                        </select>
                                                        <div className = 'row j-c-space-between pt-4'>
                                                            <div className="col-5">
                                                                <button onClick = {(e) => setVisible(0)} className = 'text-capitalize p-3 d-block w-100 border border-5x border-success rounded bg-clear text-success'>cancel</button>
                                                            </div>
                                                            <div className="col-5">
                                                                <button onClick = {(e) => setVisible(2)} className = 'text-capitalize p-3 d-block w-100 rounded btn btn-success border-0'>add content</button>
                                                            </div>
                                                        </div>
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
                                                    You have successfully added a new content to the bare mind app
                                                </p>
                                                <button onClick = {(e) => {
                                                    setVisible(0)
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
            `}</style>
        </AddContentContext.Provider>
    )
}
