import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper,Content } from './navbar.style';

import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = ({hide}) => {
  return (
      <Wrapper>
          <Content>
            {!hide && 
              <><Link to='/gmail'>Gmail</Link>
              <Link to='/images'>Images</Link></>
            }
            {hide && <SettingsIcon className='apps' />}
            <AppsIcon className='apps' />
            <div className='avatar'>
                <Avatar 
                    src=''
                    sx={{width: 34 , height: 34}}
                />
            </div>
          </Content>
      </Wrapper>
  )
};

export default Navbar;