import React from 'react';
import {Link} from 'react-router-dom';

function Links() {
  return(
    <footer className="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
        <span>Copyright © {getYear()} Designed by <Link to="https://colorlib.com" target='_blank' title="Colorlib">Colorlib</Link>. All rights reserved.</span>
    </footer>
  );
  
  function getYear() {
    return new Date().getFullYear();
  }
}
export default Links;