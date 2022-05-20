# Sanity Clean Content Studio
- Sanity Studio: `https://www.sanity.io/studio`
- run: `sanity start`
- deploy: `sanity deploy`
- link to deploy: https://song-bird.sanity.studio/desk - only for admin
- link to cards API: `https://drzbiexu.api.sanity.io/v2021-10-21/data/query/production?query=*[_type=='card']`
- getImage
```js
const imgKey = data.result[`${id}`].image.asset._ref.replace(/image-/, '').replace(/-jpg/, '');
const img = `https://cdn.sanity.io/images/drzbiexu/production/${imgKey}.jpg`;
```
- getAudio
```js
const audioKey = data.result[`${id}`].audio.asset._ref.replace(/file-/, '').replace(/-mp3/, '');
const audio = `https://cdn.sanity.io/files/drzbiexu/production/${audioKey}.mp3`;
```
