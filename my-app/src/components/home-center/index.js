import React,{ useState } from 'react';
import { Content } from './mid.style';

import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { useNavigate } from 'react-router-dom';
import { useResultContext } from '../../context/ContextProvider';

const Center = ({hideBtns , fixed}) => {
  const { setSearchTerm } = useResultContext();

  const [input,setInput] = useState('');
  const navigate = useNavigate();   //for redirecting to search page

  const search = (e) =>{
      e.preventDefault();

      {input && setSearchTerm(input)};
      {input && navigate('/search')};
  }

  return (
      <Content>
            <div className='row1' id={input && 'focus'}>
              <SearchIcon className='icon' onClick={search}/>
              <input autoFocus value={input} onChange={(e)=>setInput(e.target.value)}/>
              {input && 
                <ClearIcon className='icon clear' onClick={(e)=>setInput('')}/>
              }
              <MicIcon className='icon'/>
            </div>
          <div className={hideBtns && 'hide'}>
            <div className='row2'>
                <Button onClick={search} type='submit' variant='outlined'>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
          </div>
      </Content>
  )
};

export default Center;
