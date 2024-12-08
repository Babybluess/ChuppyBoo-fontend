import { MdKeyboardArrowDown } from 'react-icons/md';
import { LuSettings, LuCopy, LuQrCode } from 'react-icons/lu';
import { SiTicktick } from 'react-icons/si';
import { BsSend } from 'react-icons/bs';
import { FiRepeat } from 'react-icons/fi';
import { JSX, useMemo, useState } from 'react';
import NftList from './components/NftList';

type FunctionType = {
	name: string;
	icon: JSX.Element;
};

const functionList: FunctionType[] = [
	{
		name: 'Receive',
		icon: <LuQrCode className="w-[20px] h-[20px] text-white" />,
	},
	{
		name: 'Send',
		icon: <BsSend className="w-[20px] h-[20px] text-white" />,
	},
	{
		name: 'Swap',
		icon: <FiRepeat className="w-[20px] h-[20px] text-white" />,
	},
];

function ProfileScreen() {
	const address = 'ET8WDGfsffB4YRHY6ZYzsFhNZzmGuDzuvTBYWffRUXyG';
	const [statusBar, setStatus] = useState('Tokens');

	const tokenList = useMemo(() => {
		switch (statusBar) {
			case 'Tokens':
				return <span>token list</span>;
			case 'NFTs':
				return <NftList/>;
			default:
				return <span>token list</span>;
		}
	}, [statusBar]);

	return (
			<div className="w-full gap-6 flex flex-col">
				{/* header */}
				<div className="flex justify-between">
					{/* profile */}
					<div className=" flex flex-col gap-4">
						<div className="flex gap-2 items-center">
							<img
								src="https://img.freepik.com/free-photo/3d-rendering-boy-wearing-cap-with-letter-r_1142-40523.jpg?t=st=1733304617~exp=1733308217~hmac=447f932a81c99340817f1e191bdca11f6672d9e6a8f44d926663ad493723b392&w=740"
								alt="img"
								className="w-12 h-12 rounded-full object-contain"
							/>
							<div className="w-[22px] h-[22px] rounded-full flex justify-center items-center bg-transparent border-[1px] border-[#3c2b29]">
								<MdKeyboardArrowDown className='text-white' />
							</div>
						</div>
						{/* tittle */}
						<div className="flex gap-2 items-center">
							<span className="font-bold text-white">limon</span>
							<SiTicktick className="w-4 h-4 text-green-400" />
							<span className="text-[#FFFFFF99] text-sm">
								{address.substring(0, 4)}...{address.substring(38)}
							</span>
							<LuCopy className="text-[#757575]" />
						</div>
					</div>
					{/* icon */}
					<div className="w-12 h-12 rounded-full border-[1px] border-[#b792f34a] flex justify-center items-center bg-transparent">
						<LuSettings className="text-[#b68aff] w-6 h-6" />
					</div>
				</div>
				{/* detail */}
				<div className="flex flex-col gap-2">
					<span className="font-bold text-3xl text-white">$969.69</span>
					<span className="text-sm font-medium text-[#FFFFFF99] pl-1">0.00%</span>
				</div>
				{/* action */}
				<div className="w-full py-[1.5px] rounded-xl bg-gradient-to-r flex justify-center items-center from-[#DDA6FF33] to-[#EED2FF33]">
					<div className="bg-[#24163B] w-[99%] rounded-xl px-3 py-2 flex justify-between items-center ">
						{functionList.map((item, index) => (
							<button key={index} className="flex flex-col gap-2 items-center justify-center px-5 py-3">
								{item.icon}
								<span className="font-thin text-white text-sm">{item.name}</span>
							</button>
						))}
					</div>
				</div>
				{/* token list */}
				<div className="w-full flex flex-col gap-4">
					<div className="flex text-white">
						<button
							onClick={() => setStatus('Tokens')}
							className={`w-1/2 py-[10px] ${
								statusBar == 'Tokens'
									? 'border-b-[3px] border-[#B68AFF]'
									: 'border-b-[1px] border-[#423C4D]'
							}`}
						>
							<span>History</span>
						</button>
						<button
							onClick={() => setStatus('NFTs')}
							className={`w-1/2 py-[10px] ${
								statusBar == 'NFTs'
									? 'border-b-[3px] border-[#B68AFF]'
									: 'border-b-[1px] border-[#423C4D]'
							}`}
						>
							<span>NFTs</span>
						</button>
					</div>
					{/* token */}
					{tokenList}
				</div>
			</div>
	);
}

export default ProfileScreen;