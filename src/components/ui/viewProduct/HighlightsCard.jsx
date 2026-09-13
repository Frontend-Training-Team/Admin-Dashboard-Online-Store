import { Sparkles } from 'lucide-react';

const HighlightsCard = ({ highlights }) => {
    return (
        <div className="p-5 rounded-2xl border border-[#C98156]/20 bg-[#2A1B12]/20 dark:bg-[#2A1B12]/40 shadow-xs mb-2">
            <span className="text-xs font-semibold text-brand-900 dark:text-[#F0CDAF] flex items-center gap-1.5 mb-2 uppercase tracking-wider">
                <Sparkles size={14} className="text-[#C98156]" /> Highlights
            </span>
            <p className="text-sm text-brand-800 dark:text-[#B9B2A8] leading-relaxed">
                {highlights}
            </p>
        </div>
    );
};

export default HighlightsCard;
