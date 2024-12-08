import { NFT } from '@/app/type/icon.type';
import NftCard from './NftCard';

const nfts: NFT[] = [
	{
		name: 'SMB ver 2',
		image: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg?ga=GA1.1.1406012874.1725872649&semt=ais_hybrid',
	},
	{
		name: 'CryptoUndeads',
		image: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?ga=GA1.1.1406012874.1725872649&semt=ais_hybrid',
	},
	{
		name: 'SMB ver 2',
		image: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?ga=GA1.1.1406012874.1725872649&semt=ais_hybrid',
	},
];

function NftList() {
	return (
		<div className="w-full h-[320px] flex justify-between flex-wrap gap-4 overflow-y-scroll">
			{nfts.map((item, index) => (
				<NftCard key={index} item={item} />
			))}
		</div>
	);
}

export default NftList;