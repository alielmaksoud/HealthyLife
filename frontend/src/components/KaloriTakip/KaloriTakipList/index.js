import React from 'react';

import KaloriTakipItem from '../KaloriTakipItem';

const KaloriTakipList = props => {
  const events = props.events.map(event => {
    return (
      <KaloriTakipItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        price={event.price}
        date={event.date}
        userId={props.authUserId}
        creatorId={event.creator._id}
        onDetail={props.onViewDetail}
      />
    );
  });

  return <ul className="kalariTakip__list">{events}</ul>;
};

export default KaloriTakipList;