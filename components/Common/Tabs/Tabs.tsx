
import React, { ReactElement, useState } from "react"
import TabTitle from "./TabTitle"

type Props = {
  children: any
}

const Tabs: React.FC<Props> = ({ children }) => {
  console.log('children',children)
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <>
    <div
    className="nav nav-tabs nav-fill mobile-scroll"
    id="nav-tab"
    role="tablist">
      {children.length > 0 ? (
        children?.map((item, index) => (
          <TabTitle
            key={item.props.id}
            id={item.props.id}
            title={item.props.title}
            index={index}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))
      ) : (
        <TabTitle
          key={children.props.id}
          id={children.props.id}
          title={children.props.title}
          index={0}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      )}
    </div>
    <div className="tab-content" id="nav-tabContent">
      {children.length > 0 ? (
        children[selectedTab]
      ) : (
        children
      )}
    </div>
    </>
  )
}

export default Tabs
