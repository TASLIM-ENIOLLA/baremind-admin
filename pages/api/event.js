export default () => {
    const URL = 'https://bareminds.oracleblocksdapp.xyz/api/event/1'
    const body = {
        "address": "Long Abuja, Wuse zone 5",
        "date": "2022-02-20",
        "time": "12:25:00",
        "name": "TechNuz"
    }

    res.status(200).json({
        type: 'success',
        data: {
            "id": 1,
            "name": "TechNuz",
            "address": "Long Abuja, Wuse zone 5",
            "date": "2022-02-20",
            "time": "12:25:00",
            "status": "Coming soon",
            "createdOn": "2022-06-16 02:40:55"
        }
    })
}