import React from 'react';

const Loading: React.FC<{text?: string}> = ({text = ''}) => {
    return <div>{text}</div>
}

export default Loading;