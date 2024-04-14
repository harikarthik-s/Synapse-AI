import { CircleHelp, History, HistoryIcon, Menu, Plus, Settings } from 'lucide-react';
import { useContext, useState } from 'react';
import { Context } from "../context/Context";
import RecentChatItem from './RecentChatItem';
import {Link} from "react-router-dom";
import { GradientLight } from './design/Benefits';
// import {UserButton} from "@clerk/clerk-react";

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat, loading } = useContext(Context);

    const loadPreviousPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	};

    const toggleSidebarExpand = () => {
		setExtended((prev) => !prev);
	};

  return (
    <div className={`hidden h-screen max-w-60 flex-col justify-between bg-[#15131d] backdrop-blur border border-n-1/10 px-4 py-6 duration-500 sm:inline-flex ${
				extended ? 'w-60' : 'w-[4.75rem]'
			}`}
		>
            <div>
				<button
					onClick={toggleSidebarExpand}
					className='grid place-items-center rounded-full p-3 hover:bg-n-6'
				>
					<Menu size={18} />
				</button>

                <div
					onClick={!loading ? newChat : undefined}
					className={`mt-10 inline-flex h-11 cursor-pointer items-center gap-1 rounded-full bg-n-6 hover:bg-n-5 p-[0.875rem] text-sm text-brand-300 duration-300 ${
						extended ? 'w-[8.25rem]' : 'w-11' 
					} `}
				>
					<Plus className='min-w-4' size={16} />
					<p className='line-clamp-1'>New Chat</p>
				</div>
                {extended ? (
					<div className='animate-fade-in flex flex-col'>
						<p className='my-7 ml-1 text-md'>Recent</p>

						<div>
							{prevPrompts
								.slice()
								.reverse()
								.map((prompt, idx) => (
									<RecentChatItem
										key={`${prompt} - ${idx}`}
										onClick={
											!loading ? () => loadPreviousPrompt(prompt) : undefined
										}
										label={prompt}
									/>
								))}
						</div>
					</div>
				) : null}
				
            </div>
			<div className='flex flex-col'>
			<Link to="/">
				<div
				className={`flex h-11 cursor-pointer items-center justify-start gap-2 rounded-full px-[0.875rem] text-sm  duration-500 hover:bg-brand-200 ${
					extended ? 'w-full' : 'w-11'
				}`}>
					
					<CircleHelp color="white" className='min-w-5' size={18} />
					<p className='line-clamp-1 text-slate'>Help</p>
					
				</div>
				</Link>
				<div
				className={`flex h-11 cursor-pointer items-center justify-start gap-2 rounded-full px-[0.875rem] text-sm  duration-500 hover:bg-brand-200 ${
					extended ? 'w-full' : 'w-11'
				}`} onClick={toggleSidebarExpand}>
					
					<HistoryIcon color="white" className='min-w-5' size={18} />
					<p className='line-clamp-1 text-slate'>Activity</p>
				</div>

				<div
				className={`flex h-11 cursor-pointer items-center justify-start gap-2 rounded-full px-[0.875rem] text-sm  duration-500 hover:bg-brand-200 ${
					extended ? 'w-full' : 'w-11'
				}`}>
					<Settings color="white" className='min-w-5' size={18} />
					<p className='line-clamp-1 text-slate'>Settings</p>
				</div>

			</div>
			
    </div>
  )
}

export default Sidebar