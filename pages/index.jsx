export default () => {
    return <></>
}

export const getServerSideProps = (context) => {
    const {req: {cookies}} = context

    return {
        redirect: {
            destination: cookies['BAREMIND_ADMIN'] ? '/home' : '/log-in'
        }
    }
}