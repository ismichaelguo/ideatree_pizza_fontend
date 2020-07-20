import React from 'react';
import MainNav from '../../components/main-nav/MainNav';
import Map from '../../components/map/Map';
import './map-page.scss';

const MapsPage = (props) => {
  // console.log(props.location.pathname);
  const pathname = props.location.pathname;
  const inMapId = props.match.params.id;
  const inMap = props.match.params.inMap;
  return (
    <div className="mapPage">
      <section className="mapPage__nav">
        <MainNav pathname={pathname} />
      </section>
      <section className="mapPage__content">
        <Map inMapId={inMapId} inMap={inMap}/>
      </section>
    </div>
  );
}

export default MapsPage;