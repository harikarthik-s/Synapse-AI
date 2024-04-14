import { UserButton } from '@clerk/clerk-react';
import { useClerk } from '@clerk/clerk-react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function ChatApp() {
  const { user } = useClerk();
  return (
    <div className= "flex h-screen">
    {/* <div>ChatApp</div>
    <UserButton /> */}
    <Sidebar />
    <Main />
    </div>
  )
}

export default ChatApp