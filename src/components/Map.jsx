import React from 'react';
import "./Map.css";

const Map = () => {
  return (
    <div className='Map-container'>
        <div className='Map-Address'>
            KGN Car Hospital, Bharat Mata Chowk, NH 43, <br/>  Kharsiyanaka, Ambikapur, Chhattisgarh, 497001
        </div>
        <div className='Map' id='map'>
            <iframe
                className='Map-iframe'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571.938131459021!2d83.20746071072246!3d23.108144245776472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3989a31887231d2f%3A0xd6f56f4fe67ae724!2sKgn%20Car%20Ac.%26%20Auto%20Ectricals%20(%20complete%20car%20workshop)!5e1!3m2!1sen!2sin!4v1738777667362!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
  );
};

export default Map;
