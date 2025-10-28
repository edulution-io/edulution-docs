import React from 'react';

type TagType = 'school' | 'business' | 'ios' | 'android';

interface TagProps {
    type: TagType;
    children: React.ReactNode;
}

const tagStyles: Record<TagType, React.CSSProperties> = {
    school: { backgroundColor: '#e3f2fd', color: '#1976d2' },
    business: { backgroundColor: '#fff3e0', color: '#f57c00' },
    ios: { backgroundColor: '#f3e5f5', color: '#7b1fa2' },
    android: { backgroundColor: '#e8f5e9', color: '#388e3c' },
};

const Tag: React.FC<TagProps> = ({ type, children }) => {
    return (
        <span
            style={{
                ...tagStyles[type],
                padding: '0px 4px',
                borderRadius: '2px',
                fontSize: '0.6em',
                fontWeight: '500',
                marginLeft: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                height: '8px',
                lineHeight: '0.6',
            }}
        >
      {children}
    </span>
    );
};

export default Tag;