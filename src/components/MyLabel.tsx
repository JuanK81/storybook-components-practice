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

export const MyLabel = ({
  allCaps = false,
  backgroundColor = 'transparent',
  color = 'primary',
  fontColor = '#000',
  label = 'No Label',
  size = 'normal',
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color} `}
      style={{ color: fontColor, backgroundColor: backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
