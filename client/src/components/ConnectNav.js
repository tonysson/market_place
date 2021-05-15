import React  from 'react';
import {useSelector} from 'react-redux';
import {Card , Avatar} from "antd";
import moment from "moment";
const {Meta} = Card

const ConnectNav = () => {

    const {auth} = useSelector(state => ({...state}))

    return (
        <>
          <div className="d-flex justify-content-around">
            <Card>
                <Meta 
                description={`Joined ${moment(auth.user.createdAt).fromNow()}`}
                avatar={<Avatar>{auth.user.name[0]}</Avatar>}  
                title={auth.user.name}   />
            </Card>
            {
                auth &&
                auth.user && 
                auth.user.stripe_seller && 
                auth.user.stripe_seller.charges_enabled && (
                    <>
                       <div className="">Pendind balance</div>
                       <div className="">Payout settings</div>
                    </>
                )
            }
         </div>

        </>
    )
}

export default ConnectNav
