/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
    /**
     * Text to show on the label
     */
    label: string;
    /**
     * Size of the Label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Color of the Label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Font Color of the Label
     */
    fontColor?: string;
    /**
     * All Caps control
     */
    allCaps?: boolean;
    /**
     * All Caps control
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, backgroundColor, color, fontColor, label, size, }: MyLabelProps) => JSX.Element;
