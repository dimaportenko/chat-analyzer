/**
 * Created by troublesohard on 5/18/16.
 */
import React from 'react';


export default (props) => {
  const onClickHandle = () => {
    props.onClick(props.uid);
  };

  return (
    <tr onClick={onClickHandle} >
      <td>
        <img alt="Chat" src={props.image} className="avatar-50" />
      </td>
      <td>
        {props.firstName} {props.lastName}
      </td>
    </tr>
  );
};
