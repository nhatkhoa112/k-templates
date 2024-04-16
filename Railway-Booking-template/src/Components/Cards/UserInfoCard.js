import classes from './Cards.module.css'

const UserInfoCard = () => {

    const user_data = [
        ['User ID', '43242351223'],
        ['Name', 'Nguyen  Koha'],
        ['Username', 'Kohamonkey'],
        ['Email', 'Koha@gmail.com'],
        ['Age', '31'],
        ['Gender', 'Male']
    ]


    return(
        <div className={classes.UserCardContainer}>        
            <table className="highlight container">
                <tbody>
                    {user_data.map(info => <tr key={info[0]}><th>{info[0]}</th><td>{info[1]}</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default UserInfoCard