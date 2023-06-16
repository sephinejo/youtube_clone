import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ['channel', id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <div className='flex my-3 mb-6 items-center'>
      {url && <img className='w-12 h-12 rounded-full' src={url} alt={name} />}
      <p className='text-lg font-medium ml-2'>{name}</p>;
    </div>
  );
}
