var map;

function loadMap()
{
  var mapDiv = document.getElementById('map');
  
  if (!GBrowserIsCompatible())
  {
    mapDiv.innerHTML = 'Sorry, your browser isn\'t compatible with Google Maps.';
  }
  else
  {
    map = new GMap2(mapDiv);
    map.setCenter(new GLatLng(39.9, -105.2), 10);
  }
};
