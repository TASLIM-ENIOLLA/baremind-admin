import Dashboard from '../../components/Dashboard'
import {Search} from '../../styles/svg/SVGIcons'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {server} from '../../config'

import AddCreator, {AddCreatorContext} from '../../components/contexts/AddCreator' 

export default () => {
    const {route} = useRouter()

    useEffect(async () => {
        const req1 = await fetch(`${server.frontend.url}/api/creators`, {
            method: 'POST',
            body: JSON.stringify({
                "name": "Malhodi Leslie",
                "email": "malhodi@bruiz.dev",
                "phone": "1-470-646-767",
                "status": "pending"
            })
        })
        const {data: creators} = await req1.json()
    }, [])

    return (
        <Dashboard>
            <div className="row">
                <div className = 'col-sm-12 my-2'>
                    <h3 className = 'text-capitalize'>Creator | Name</h3>
                    <div className = 'text-muted'>See creator info</div>
                </div>
            </div>
            <div>

            </div>
        </Dashboard>
    )
}

export const getServerSideProps = (context) => {
    const {query: {creatorID}} = context
    console.log(creatorID)

    return {
        props: {creatorData: {}}
    }
}