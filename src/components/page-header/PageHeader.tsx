import React, { FC } from 'react';

import './page-header.scss';

import bg from '../../assets/footer-bg.jpg';

type PageHeaderType = {
   children: any
}

const PageHeader: FC<PageHeaderType> = props => {
   return (
      <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
         <h2>{props.children}</h2>
      </div>
   );
}


export default PageHeader;