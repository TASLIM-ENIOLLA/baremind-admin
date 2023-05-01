import {ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Text} from 'recharts'
import Dashboard from '../components/Dashboard'
import {useRef, useState, useEffect} from 'react'

const BarChartData = [
    {name: 'JAN', views: Math.floor(Math.random() * 100)},
    {name: 'FEB', views: Math.floor(Math.random() * 100)},
    {name: 'MAR', views: Math.floor(Math.random() * 100)},
    {name: 'APR', views: Math.floor(Math.random() * 100)},
    {name: 'JUN', views: Math.floor(Math.random() * 100)},
    {name: 'JUL', views: Math.floor(Math.random() * 100), isMax: true},
    {name: 'AUG', views: Math.floor(Math.random() * 100)},
    {name: 'SEPT', views: Math.floor(Math.random() * 100)},
    {name: 'OCT', views: Math.floor(Math.random() * 100), isMin: true},
    {name: 'NOV', views: Math.floor(Math.random() * 100)},
    {name: 'DEC', views: Math.floor(Math.random() * 100)},
]

const PieChartData = [
    {"name": "meditation", "value": Math.floor(Math.random() * 100)},
    {"name": "body", "value": Math.floor(Math.random() * 100)},
    {"name": "sleep", "value": Math.floor(Math.random() * 100)},
    {"name": "music", "value": Math.floor(Math.random() * 100)},
    {"name": "live", "value": Math.floor(Math.random() * 100)}
]

const PieChartColors = ['#A4E3F6', '#C4CBFF', '#9CFFD9', '#F9E5CB', '#DBBFFF']

export default function Home ({userData}) {

    return (
        <Dashboard>
            <div className="row">
                <div className = 'col-12'>
                    <h3 className = 'text-capitalize'>hello administrator</h3>
                    <div className = 'text-muted'>Welcome back to the admin portal</div>
                </div>
            </div>
            <div className = 'row my-4'>
                <div className="col-lg-3 col-sm-12 col-md-6">
                    <div style = {{height: '170px'}} className = 'my-3 p-4 flex-v rounded-1x shadow bg-light-purple'>
                        <div className = 'flex-1'>
                            <h5 title = 'Total users' className = 'text-muted one-line'>Total users</h5>
                            <h2 title = '200,000' className = 'text-dark one-line pt-3'>200,000</h2>
                        </div>
                        <div>
                            <p className = 'text-muted flex-h a-i-c m-0'>
                                <span className = 'flex-1 one-line'>3% weekly increase</span>
                                <span className = 'fa fa-line-chart'></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                    <div style = {{height: '170px'}} className = 'my-3 p-4 flex-v rounded-1x shadow bg-light-creame'>
                        <div className = 'flex-1'>
                            <h5 title = 'Total creators' className = 'text-muted one-line'>Total creators</h5>
                            <h2 title = '200' className = 'text-dark one-line pt-3'>200</h2>
                        </div>
                        <div>
                            <p className = 'text-muted flex-h a-i-c m-0'>
                                <a href = '/creators' className = 'underline-0 flex-1 one-line text-action'>See creators</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                    <div style = {{height: '170px'}} className = 'my-3 p-4 flex-v rounded-1x shadow bg-light-green'>
                        <div className = 'flex-1'>
                            <h5 title = 'Total views' className = 'text-muted one-line'>Total views</h5>
                            <h2 title = '6,746,800' className = 'text-dark one-line pt-3'>6,746,800</h2>
                        </div>
                        <div>
                            <p className = 'text-muted flex-h a-i-c m-0'>
                                <span className = 'flex-1 one-line'>3% weekly increase</span>
                                <span className = 'fa fa-line-chart'></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                    <div style = {{height: '170px'}} className = 'my-3 p-4 flex-v rounded-1x shadow bg-light-blue'>
                        <div className = 'flex-1'>
                            <h5 title = 'All contents' className = 'text-muted one-line'>All contents</h5>
                            <h2 title = '8,000' className = 'text-dark one-line pt-3'>8,000</h2>
                        </div>
                        <div>
                            <p className = 'text-muted flex-h a-i-c m-0'>
                                <a href = '/content' className = 'underline-0 flex-1 one-line text-action'>See contents</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className = 'row my-4'>
                <div className="col-lg-8 col-sm-12">
                    <div className="mb-5 border rounded-1x">
                        <div className = 'border-bottom flex-h j-c-space-around p-2'>
                            <div className="">
                                <p className = 'text-muted'>Active users</p>
                                <h4 className = 'text-dark'>1000</h4>
                            </div>
                            <div className="">
                                <p className = 'text-muted'>Period</p>
                                <select className = 'bg-clear text-capitalize text-dark d-block w-100 outline-0 border-0 rounded'>
                                    <option value="">last week</option>
                                    <option value="">last month</option>
                                    <option value="">last year</option>
                                </select>
                            </div>
                            <div className="">
                                <p className = 'text-muted'>Total views</p>
                                <h4 className = 'text-dark'>500000</h4>
                            </div>
                            <div className="">
                                <p className = 'text-muted'>Change</p>
                                <h4 className = 'text-action'>+3%</h4>
                            </div>
                        </div>
                        <div className = 'p-3'>
                            <ResponsiveContainer width='100%' height={300}>
                                <BarChart data={BarChartData}>
                                    <XAxis text = {{value: 'name'}} stroke = "#00000000" margin ={{top: '10'}} dataKey="name" />
                                    <Bar shape = {({x, y, height, width, fill, name, ...rest}) => {
                                        return (
                                            <>
                                                <rect x={x} y={y} rx="8" width={width} height={height} style={{fill: `${fill}`}} />
                                                <g>
                                                    <text x={x} y={y + height + 20} height={height} fill={`grey`}>{name}</text>                                                
                                                </g>
                                            </>
                                        )
                                    }} dataKey="views" fill="#d0ccd2bd">{
                                        BarChartData.map(({isMax, isMin}, index) => (
                                            <Cell key={`cell-${index}`} fill={`${isMax ? '#BAFFE5' : (isMin ? '#99AEFD' : '#d0ccd2bd')}`} />
                                        ))
                                    }</Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className = 'mb-5'>
                        <h3 className = 'mb-3'>Recent uploads</h3>
                        <div className = 'table-responsive'>
                            <table className = 'table table-hover'>
                                <thead className = 'border-bottom bg-light-deep shadow-sm'>
                                    <tr>
                                        <td>Name</td>
                                        <td>Type</td>
                                        <td>Created at</td>
                                        <td>Category</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Intro to mindfulness</td>
                                        <td>Video</td>
                                        <td>23 May 2022</td>
                                        <td>Meditation</td>
                                        <td className = 'text-success'>Active</td>
                                    </tr>
                                    <tr>
                                        <td>Intro to mindfulness</td>
                                        <td>Video</td>
                                        <td>23 May 2022</td>
                                        <td>Meditation</td>
                                        <td className = 'text-warning'>Archived</td>
                                    </tr>
                                    <tr>
                                        <td>Intro to mindfulness</td>
                                        <td>Video</td>
                                        <td>23 May 2022</td>
                                        <td>Meditation</td>
                                        <td className = 'text-success'>Active</td>
                                    </tr>
                                    <tr>
                                        <td>Intro to mindfulness</td>
                                        <td>Video</td>
                                        <td>23 May 2022</td>
                                        <td>Meditation</td>
                                        <td className = 'text-danger'>Removed</td>
                                    </tr>
                                    <tr>
                                        <td>Intro to mindfulness</td>
                                        <td>Video</td>
                                        <td>23 May 2022</td>
                                        <td>Meditation</td>
                                        <td className = 'text-success'>Active</td>
                                    </tr>
                                    <tr>
                                        <td>Intro to mindfulness</td>
                                        <td>Video</td>
                                        <td>23 May 2022</td>
                                        <td>Meditation</td>
                                        <td className = 'text-success'>Active</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="mb-5 p-4 border rounded-1x">
                        <h4 className = 'mb-3 py-3'>Usage frequency</h4>
                        <select className="d-block w-100 bg-clear rounded border p-3 text-muted outline-0">
                            <option value="">last 30 days</option>
                        </select>
                        <div className = 'overflow-x-auto'>
                            <ResponsiveContainer width='100%' height={400}>
                                <PieChart>
                                    <Pie data={PieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={90} outerRadius={120} label = {{fill: 'grey'}}>{
                                        PieChartData.map((each, index) => (
                                            <Cell key = {index} fill = {PieChartColors[index]} />
                                        ))
                                    }</Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className = 'row'>{
                            PieChartData.map(({name, value}, index) => (
                                <div key = {index} className="col-6 p-3">
                                    <div className="flex-h a-i-c">
                                        <span style = {{color: PieChartColors[index]}} className = 'fa fa-circle-o bold mr-3'></span>
                                        <div>
                                            <h5 className = 'text-dark one-line text-capitalize'>{name}</h5>
                                            <span className = 'text-muted one-line'>{value} users</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }</div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .bg-light-purple{
                    background: #e9d6f3bd;
                }
                .bg-light-creame{
                    background: #f3efd5bd;
                }
                .bg-light-green{
                    background: #cdf3e3bd;
                }
                .bg-light-blue{
                    background: #cde7f3bd;
                }
                .text-light-purple{
                    color: #ac21f5;
                }
                .text-light-wine{
                    color: #e84444;
                }
                .text-light-creame{
                    color: #f1d625;
                }
                .text-light-green{
                    color: #1fef97;
                }
                .text-light-blue{
                    color: #25acea;
                }
            `}</style>
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