import './ChatWindow.css'
import Chat from './Chat'
function ChatWindow(){
    return (
        <>
            <div className='chatWindow'>
                <div className='navbar'> 
                    <h2>SigmaGpt</h2>
                    <button>Get Plus</button>
                    <a></a>
                </div>
                <Chat></Chat>
                <div className='chatInput'></div>
            </div>
        </>
    )
}


export default ChatWindow;