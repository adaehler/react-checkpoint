import React from 'react'

function EmailList(props){
        return (
            <div>
                <ul>
                {props.emails.map(each => {
                    return (
                        <li>
                            Subject Line: {each.subject} <br/>Sender: {each.sender}<br/>
                            <button type="button" onClick={() => props.onOpenEmail(each.id)} >Open Email</button>
                            <br/><br/>
                            
                        </li>
                    )
                })
                    
                }
                </ul>
                    
            </div>
        )

}

export default EmailList;