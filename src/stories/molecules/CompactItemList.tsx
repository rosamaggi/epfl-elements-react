import React from 'react';
import {Button} from "./Button";
import '../assets/custumStyles.css';

interface CompactItemListProps {
  title?: string;
  children?: React.ReactNode;
  icon?: string;
  border?: 'none' | 'solid' | 'dashed' | 'dotted';
  strikethrough: boolean;
  onClickIcon?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const CompactItemList = ({
  title,
  children,
  icon,
  border = 'solid',
  strikethrough = false,
  onClickIcon
}: CompactItemListProps) => {

  let cardStyle: string = 'card';
  switch (border) {
    case 'solid':
      cardStyle = 'card card-solid';
      break;
    case 'dashed':
      cardStyle = 'card card-dashed';
      break;
    case 'dotted':
      cardStyle = 'card card-dotted';
      break;
  }

  let rightDivStyle = "flex-fill";
  if(icon) {
    rightDivStyle = "flex-item-left";
  }

  return (
      <div className={cardStyle}>
          <div className="d-flex flex-row justify-content-between">
            <div className={rightDivStyle}>
              {title ? (
                strikethrough ?
                  <h5 className="card-text"><s>{title}</s></h5>
                  :
                  <h5 className="card-text">{title}</h5>
              ) : (<></>)}
              {strikethrough ? <s>{children}</s> : children}
            </div>
              {icon ? <div className="flex-item-right">
                <Button size="icon"
                              iconName={icon}
                              onClick={onClickIcon}/>
              </div> : <></>}
          </div>
      </div>
  );
};
