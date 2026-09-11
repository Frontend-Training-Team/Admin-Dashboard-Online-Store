import { Star } from 'lucide-react';

const HighlightsCard = ({ highlights }) => {
    return (
        <div className="p-5 rounded-2xl bg-amber-500/10">
            <span className="text-[16px] font-normal text-black flex items-center gap-1.5 mb-2">
                <Star className="w-3.5 h-3.5 text-black" /> Highlights
            </span>
            <p className="text-sm text-gray-500">
                {highlights}
            </p>
        </div>
    );
};

export default HighlightsCard;