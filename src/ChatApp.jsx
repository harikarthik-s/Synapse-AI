import { UserButton } from '@clerk/clerk-react';
import { useClerk } from '@clerk/clerk-react';
import Main from './components/Main';

function ChatApp() {
  const { user } = useClerk();
  return (
    <>
    {/* <div>ChatApp</div>
    <UserButton /> */}
    <Main />
    </>
  )
}

export default ChatApp