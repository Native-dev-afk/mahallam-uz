import { useEffect, useState } from "react"


const Citizen = () => {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const res = await fetch('https://dummyjson.com/users/')
            .then(res => res.json())
            .then(res => { setUsers(res.users) });
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div style={{ width: '100%', padding: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h2>Mahalla fuqarolari ro'yhati</h2>
            <table>
                <tr>
                    <th style={{
                        border: '1px solid #dddddd',
                        textAlign: 'left',
                        padding: 8
                    }}>T/r</th>
                    <th style={{
                        border: '1px solid #dddddd',
                        textAlign: 'left',
                        padding: 8
                    }}>Ismi</th>
                    <th style={{
                        border: '1px solid #dddddd',
                        textAlign: 'left',
                        padding: 8
                    }}>Familiyasi</th>
                    <th style={{
                        border: '1px solid #dddddd',
                        textAlign: 'left',
                        padding: 8
                    }}>Telefon raqami</th>
                    <th style={{
                        border: '1px solid #dddddd',
                        textAlign: 'left',
                        padding: 8
                    }}>Tug'ilgan sanasi</th>
                    <th style={{
                        border: '1px solid #dddddd',
                        textAlign: 'left',
                        padding: 8
                    }}>Elektron pochtasi</th>
                </tr>
                {users?.map((user: any, index) => <tr key={user?.id}>
                    <td style={{
                        border: '1px solid #dddddd',
                        textAlign: 'left',
                        padding: 8
                    }}>{index}</td>
                    <td style={{
                        border: '1px solid #dddddd',
                        textAlign: 'left',
                        padding: 8
                    }}>{user?.firstName}</td>
                    <td style={{
                        border: '1px solid #dddddd',
                        textAlign: 'left',
                        padding: 8
                    }}>{user?.lastName}</td>
                    <td style={{
                        border: '1px solid #dddddd',
                        textAlign: 'left',
                        padding: 8
                    }}>{user?.phone}</td>
                    <td style={{
                        border: '1px solid #dddddd',
                        textAlign: 'left',
                        padding: 8
                    }}>{user?.birthDate}</td>
                    <td style={{
                        border: '1px solid #dddddd',
                        textAlign: 'left',
                        padding: 8
                    }}>{user?.email}</td>
                </tr>)}
            </table>
        </div>
    )
}
export default Citizen