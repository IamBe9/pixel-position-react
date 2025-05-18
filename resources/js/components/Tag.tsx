import React from 'react';

interface TagType {
    id: number;
    name: string;
}

interface TagProps {
    tag: TagType;
    size?: 'base' | 'small';
}

const Tag: React.FC<TagProps> = ({ tag, size = 'base' }) => {
    const baseClasses = 'bg-white/10 hover:bg-white/25 rounded-xl font-bold transition-colors duration-300';
    const sizeClasses = size === 'base' ? 'px-5 py-1 text-sm' : 'px-3 py-1 text-2xs';

    return (
        <a
            href={`/tags/${tag.name.toLowerCase()}`}
            className={`${baseClasses} ${sizeClasses}`}
        >
            {tag.name}
        </a>
    );
};

export default Tag;
