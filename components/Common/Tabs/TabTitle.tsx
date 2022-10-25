import React from "react";

type Props = {
  id: string;
  title: string;
  index: number;
  selectedTab: number;
  setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({
  title,
  setSelectedTab,
  selectedTab,
  index,
  id
}) => {
  return (
    <a
      className={`nav-item nav-link ${selectedTab === index && "active"}`}
      onClick={() => {
        setSelectedTab(index);
      }}
      id={`${id}`}
      data-toggle="tab"
      href={`#${id}`}
      role="tab"
      aria-controls={id}
      aria-selected={selectedTab === index && true}
    >
      {title}
    </a>
  );
};

export default TabTitle;
