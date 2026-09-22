import { Sparkles } from 'lucide-react';

const HighlightsCard = ({ highlights }) => {
    return (
        <div className="p-5 rounded-2xl border border-copper-500/20 bg-copper-900/20 dark:bg-coal-700 shadow-xs mb-2">
            <span className="text-xs font-semibold text-brand-900 dark:text-copper-200 flex items-center gap-1.5 mb-2 uppercase tracking-wider">
                <Sparkles size={14} className="text-copper-500" /> Highlights
            </span>
            <p className="text-sm text-brand-800 dark:text-content-secondary leading-relaxed">
                {highlights}
            </p>
        </div>
    );
};

export default HighlightsCard;
