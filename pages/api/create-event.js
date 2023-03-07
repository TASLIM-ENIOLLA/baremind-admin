export default (req, res) => {
    const {body} = req
    const {name, time, address, date} = JSON.parse(body)
    // const URL = 'https://bareminds.oracleblocksdapp.xyz/api/event'
    // const body = {
    //     "address": "Long Abuja, Wuse zone 5",
    //     "date": "2022-02-20",
    //     "time": "12:25:00",
    //     "name": "TechNuz"
    // }

    res.status(200).json({
        type: 'success',
        data: {
            "id": 3,
            "name": name,
            "address": address,
            "date": date,
            "time": time,
            "status": "Coming soon",
            "createdOn": "2022-06-23 23:16:49"
        }
    })
}