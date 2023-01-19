import React from 'react';
const FlyinWrapper = ({ style, children }) => {
    return (React.createElement("div", { className: 'flyinWrapper', style: { position: 'relative', ...style } }, children));
};
export { FlyinWrapper };
