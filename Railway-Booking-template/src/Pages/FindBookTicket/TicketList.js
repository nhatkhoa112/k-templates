import { TicketFindCard } from '../../Components'
import Masonry from 'react-masonry-css'
import classes from './FindBookTicket.module.css'

const TicketList = () => {

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
        500: 1
    }

    return(
        <div className={classes.CenterContainer} style={{minHeight:'90vh'}}>
            <h3 className={classes.FormTitle}>TRAIN AVAILABILITY</h3>
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                <TicketFindCard/>
                <TicketFindCard/>
                <TicketFindCard/>
                <TicketFindCard/>
                <TicketFindCard/>
                <TicketFindCard/>
                <TicketFindCard/>
                <TicketFindCard/>
            </Masonry>
        </div>
    )
}

export default TicketList


