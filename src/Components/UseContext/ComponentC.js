import React from 'react'
import { UserContext, ChannelContext } from '../../App'

function ComponentC() {
  return (
    <div>
        <UserContext.Consumer>
        {user =>{
            return(
                <ChannelContext.Consumer>
                    {
                        channel => {
                            return <div>User context value {user},
                             Channel context value {channel}</div>
                        }
                    }
                    
                </ChannelContext.Consumer>
            )    
            }
        }
        </UserContext.Consumer>
      
    </div>
  )
}

export default ComponentC
