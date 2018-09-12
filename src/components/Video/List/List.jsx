import React from 'react';
import Item from '../Item/Item';

const List = (props) => {

  console.log("Propsを受け取りました");
  console.log(props.videos);

  // ???
  const Items = props.videos.map((video) => {
    return <Item video={video} key={video.id.videoId} />;
  });

  return (
    <ul className="col-md-4 list-group">
      {/* JSX内に変数Itemsを挿入する */}
      {Items}
    </ul>
  );
};

export default List;