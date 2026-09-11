import { Star } from 'lucide-react';

const Highlights = ({ highlights }) => {
    return (
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <span className="text-xs font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-1.5 mb-1">
                <Star className="w-3.5 h-3.5 text-amber-500" /> Highlights
            </span>
            <p className="text-xs text-amber-800/80 dark:text-amber-300/80">
                {highlights}
            </p>
        </div>
    );
};

export default Highlights;