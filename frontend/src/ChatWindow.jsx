import './ChatWindow.css'
import Chat from './Chat'
function ChatWindow(){
    return (
        <>
            <div className='chatWindow'>
                <div className='navbar'>
                    
                </div>
                <Chat></Chat>
                <div className='chatInput'></div>
            </div>
        </>
    )
}


export default ChatWindow;