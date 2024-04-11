import { UserButton } from '@clerk/clerk-react';
import { useClerk } from '@clerk/clerk-react';

function ChatApp() {
  const { user } = useClerk();
  return (
    <>
    <div>ChatApp</div>
    <UserButton />
    </>
  )
}

export default ChatApp