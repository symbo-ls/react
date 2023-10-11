import * as React from 'react'
import ComponentWall from './ComponentWall'

export default function emptyCache(){
  if('caches' in window){
  caches.keys().then((names) => {
          // Delete all the cache files
          names.forEach(name => {
              caches.delete(name);
          })
      });
  }
}

export function App(props) {
  emptyCache()
  return <ComponentWall />
}
