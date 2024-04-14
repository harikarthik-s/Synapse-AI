import {useContext} from "react";
import { Context } from "../context/Context";
import { synapse, heroBackground } from "../assets";
import { UserButton, useUser } from '@clerk/clerk-react';
import { Link } from "react-router-dom";
import { Code, Compass, DraftingCompass, ImagePlus, Mic, SendHorizonal, Loader } from "lucide-react";
import { brainwaveSymbol } from "../assets";
import { GradientLight } from "./design/Benefits";
import { BackgroundCircles} from "./design/Hero";

const Main = () => {
    const {
		onSent,
		setInput,
		recentPrompt,
		input,
		loading,
		showResults,
		resultData,
        isPending,
	} = useContext(Context);

    const {user} = useUser();
    const {fullName, imageUrl} = user;

    const handleCardClick= (promptText) => {
        setInput(promptText);
    }

    return(
        <div className="relative h-screen flex-1 pb-[15vh] overflow-hidden selection:bg-n-9/40">
            <nav className="flex items-center justify-between px-5 py-[1.375rem] text-base font-light text-brand-300 z-1">
                <Link to="/"><img src={synapse} alt="" /></Link>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-100">
                    <UserButton className="min-w-4" size={16} />
                </div>
            </nav>
            
            <div className="mx-auto max-w-[55rem]">
                
                {!showResults ? (
                    <>
                        <div className="no-scrollbar h-[calc(100vh-5.25rem)] z-1 overflow-y-scroll px-[5%] pb-40 font-outfit">
                            <div className="my-14 p-3 pt-0 text-6xl font-medium ">
                                <p className="text-brand-400">
                                    <span className="h1 bg-gradient-to-br from-[#4285f4] via-[#9b72cb] to-[#d96570] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                        Hello, {fullName}
                                    </span>
                                    <span className="block text-n-2">How can I help you today?</span>
                                </p>
                            </div>
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5 pt-0">

                                <div className='relative h-52 cursor-pointer rounded-xl bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl p-4 duration-300 hover:bg-n-9/50'
                                    onClick={() => handleCardClick("I need a tagline for my online store selling handmade jewelry, based around nature themes. I want people to feel beautiful, classy, down-to-earth, special.")}>
									<p className='text-brand-300'>Brainstorm a tagline for my online store</p>
									<div className='absolute bottom-4 right-4 rounded-full bg-white p-2'>
                                        <DraftingCompass size={20} color="black" />
									</div>
								</div>
                                <div className='relative h-52 cursor-pointer rounded-xl bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl p-4 duration-300 hover:bg-n-9/50'
                                    onClick={() => handleCardClick("I need to store data for my business that sells toothbrushes online. We need to build one frontend for customers to buy toothbrushes, and another for employees to handle shipping. Define a database schema and generate SQL commands that can be used to create the necessary tables and enforce their relationships in BigQuery.")}>
									<p className='text-brand-300'>Help design a database schema for a business</p>
									<div className='absolute bottom-4 right-4 rounded-full bg-white p-2'>
                                        <Code size={20} color="black"/>
									</div>
								</div>
                                <div className='relative h-52 cursor-pointer rounded-xl bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl p-4 duration-300 hover:bg-n-9/50'
                                    onClick={() => handleCardClick("Explain how a solar panel generates energy. You are an engineer, skilled and highly qualified in this area of technology. Provide a detailed, step by step overview of how this technology operates. Begin with the logical starting point. Make sure your explanations are understandable. Make analogies to convey a better understanding. Be concise.")}>
									<p className='text-brand-300'>Explain how something works like an engineer</p>
									<div className='absolute bottom-4 right-4 rounded-full bg-white p-2'>
                                        <Compass size={20} color="black"/>
									</div>
								</div>

                            </div>
                        </div>
                    </>
                ): (
                    <div className='no-scrollbar h-[calc(100vh-5.25rem)] overflow-y-scroll px-[5%] pb-40 z-5'>
						<div className='my-10 flex items-center gap-5'>
							<div className='grid min-h-10 min-w-10 place-items-center rounded-full bg-brand-100'>
								<img src={imageUrl} className='icon text-brand-300 rounded-full w-[40px] ' size={16} />
							</div>

							<p>{recentPrompt}</p>
						</div>
                        <div className='flex items-start gap-5'>
							<div className='grid h-10 min-w-10 place-items-center'>
                                <img src={brainwaveSymbol}  alt="synapse" className={`-mt-[0.5625rem] aspect-square w-9 h-9 duration-500 
                                                                            ${ isPending ? 'animate-spin': loading ? 'animate-spin'
							                                                    : 'rotate-0 [animation-play-state:pause]'}`} 
                                />
                            </div>
                            {isPending ? (
								<div className='flex w-full flex-col gap-2'>
									<hr className={`mt-1.5 h-5 animate-background-pan rounded-md border-none bg-brand-100 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] [animation-delay:100ms] [animation-duration:3s] [background-size:800px_50px]`}/>
                                    <hr className={`mt-1.5 h-5 animate-background-pan rounded-md border-none bg-brand-100 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] [background-size:800px_50px] [animation-delay:200ms] [animation-duration:2s]`}/>
                                    <hr className={`mt-1.5 h-5 w-8/12 animate-background-pan rounded-md border-none bg-brand-100 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] [background-size:800px_50px] [animation-delay:300ms] [animation-duration:4s]`}/>
								</div>
							) : (
                                    
								<p className='font-light leading-[1.8]' dangerouslySetInnerHTML={{ __html: resultData }} />
							)}
                        </div>
                    </div>
                )}

                <div className='absolute bottom-0 mx-auto w-full max-w-[55rem] px-5 backdrop-blur-sm'>
					<div className='flex items-center  justify-between gap-5 rounded-full bg-n-9/40 backdrop-blur border border-n-1/10 px-5 py-[1rem]'>
                        <input
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={(e) => e.key === 'Enter' && onSent()}
							className='flex border-none overflow-hidden flex-grow bg-transparent text-slate outline-none'
							type='text'
							placeholder='Enter a prompt here'
							value={input}
							disabled={loading}
						/>
                        <div className='flex items-center gap-2 text-brand-300'>
                        <a className="flex items-center justify-center w-9 h-9 cursor-pointer rounded-full transition-colors hover:bg-n-7">
                            <ImagePlus className='min-w-4' size={20} />
                        </a>
						<a className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-full transition-colors hover:bg-n-7">
							<Mic className='min-w-4' size={20} />
                        </a>
							{!loading && !!input ? (
                                <a className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-full transition-colors hover:bg-n-7">
								<SendHorizonal
									onClick={() => onSent()}
									className='min-w-4'
									size={16}
								/>
                                </a>
							) : null}

							{loading ? (
								<Loader className='min-w-4 animate-spin' size={20} />
							) : null}
						</div>
                    </div>
                    <p className='mx-auto my-3 text-center text-xs font-light text-n-2 sm:text-sm'>
						Synapse may display inaccurate info, including about people, so
						double-check its responses.
					</p>
                </div>

            </div>
            <div className="absolute opacity-40 top-[54%] left-1/2 z-[-1] w-[234%] -translate-x-1/2 md:top-[46%] md:w-[138%] lg:w-[100%] lg:-top-[50%] lg:left-[50%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
            <BackgroundCircles/>
            {/* <GradientLight/> */}
          </div>
          {/* <BackgroundCircles/> */}
        </div>
    )
}

export default Main;