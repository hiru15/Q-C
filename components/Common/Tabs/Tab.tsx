import React from 'react'

type Props = {
  title: string,
  id: string,
  children: React.ReactNode;
}

const Tab: React.FC<Props> = ({ children, id }) => {
  console.log('childrenTab',children)
  return (
    <div
      className="tab-pane fade show active"
      id={id}
      role="tabpanel"
      aria-labelledby="nav-mail-tab"
    >
      {children}
    </div>
  )
}

export default Tab
