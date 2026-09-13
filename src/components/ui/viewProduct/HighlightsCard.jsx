import { Star } from 'lucide-react';

const HighlightsCard = ({ highlights }) => {
    return (
        <div className="p-5 rounded-2xl bg-amber-500/10 mb-5">
            <span className="text-lg font-normal text-gray-400 dark:text-[#E8B58F] flex items-center gap-1.5 mb-2">
                <Star size={18} className="text-gray-400 dark:text-[#E8B58F]" /> Highlights
            </span>
            <p className="text-gray-400 dark:text-[#B9B2A8]">
                {highlights}
            </p>
        </div>
    );
};

export default HighlightsCard;