import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from './links.style';

import SearchIcon from '@mui/icons-material/Search';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageIcon from '@mui/icons-material/Image';

const Links = () => {
  return (
      <Wrapper>  
        <div className='option'>
            <NavLink to='/search' className={({isActive}) => (isActive ? 'active' : 'notactive' )}> <SearchIcon fontSize='small' className='icon'/> All</NavLink>
        </div>
        <div className='option'>
            <NavLink to='/news' className={({isActive}) => (isActive ? 'active' : 'notactive' )}> <NewspaperIcon fontSize='small' className='icon'/> News</NavLink>
        </div>
        <div className='option'>
            <NavLink to='/videos' className={({isActive}) => (isActive ? 'active' : 'notactive' )}> <OndemandVideoIcon fontSize='small' className='icon'/> Videos</NavLink>
        </div>
        <div className='option'>
            <NavLink to='/images' className={({isActive}) => (isActive ? 'active' : 'notactive' )}> <ImageIcon fontSize='small' className='icon'/> Images</NavLink>
        </div>
      </Wrapper>
  );
};

export default Links;
