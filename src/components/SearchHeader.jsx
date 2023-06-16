import React, { useEffect, useState } from 'react';
import { CiSearch, CiYoutube } from 'react-icons/ci';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const { keyword } = useParams();

  const changeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/videos/${searchText}`);
  };

  useEffect(() => {
    return setSearchText(keyword || '');
  }, [keyword]);

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <span>
        <Link to='/' className='flex items-center'>
          <CiYoutube className='text-5xl text-brand' />
          <h1 className='font-bold ml-2 text-3xl'>YouTube</h1>
        </Link>
      </span>
      <form className='w-full flex  justify-center' onSubmit={submitHandler}>
        <input
          className='w-7/12 p-2 outline-none bg-black text-gray-50'
          type='text'
          placeholder='Search...'
          value={keyword}
          onChange={changeHandler}
        />
        <button className='bg-zinc-600 px-4' type='submit'>
          <CiSearch />
        </button>
      </form>
    </header>
  );
}
