/// <reference types="react" />
interface FlyinItemProps {
    image: string;
    startPosition: {
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
    };
    endPosition: {
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
    };
    zIndex?: number;
}
declare const FlyinItem: ({ image, startPosition, endPosition, zIndex }: FlyinItemProps) => JSX.Element;
export { FlyinItem };
//# sourceMappingURL=FlyinItem.d.ts.map