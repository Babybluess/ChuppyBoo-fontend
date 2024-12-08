import { NFT } from "@/app/type/icon.type";

function NftCard({ item }: { item: NFT }) {
	return (
		<div className="w-44 h-44 rounded-lg relative">
			<img src={item.image} alt="nft" className="w-full h-full object-contain rounded-lg" />
			<div className="px-1 py-[2px] bg-[#28212F] rounded absolute left-2 bottom-1">
				<span className="text-white text-sm">{item.name}</span>
			</div>
		</div>
	);
}

export default NftCard;