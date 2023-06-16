import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
      <h3>@vlademirjunior</h3>
      <p>Gatinho pulando não é novidade!</p>
      <div className='videoFooter__music'>
        <MusicNoteIcon className='videoFooter__icon' />
        <div className='videoFooterMusic__text'>
        <p>Dança Gatinho....</p>
        </div>
      </div>
      </div>
      <img
        className='videoFooter__record'
        alt='icone de um vinyl girando'
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
       />
    </div>
  )
}

export default VideoFooter