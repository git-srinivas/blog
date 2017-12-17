import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import portfolio from '../assets/portfolio.jpg'
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';

const CardExampleWithAvatar = (props) => (
  <Card style={{marginBottom:'3vh'}}>
    <CardHeader
      title="Srinivas Vykuntapu"
      subtitle="Author"
      avatar={<Avatar src={portfolio} />}
    />
    {/* <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
      <img src="images/nature-600-337.jpg" alt="" />
    </CardMedia> */}
    <CardTitle title={props.info.title} subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="View" />
      <FlatButton label="Comment" />
    </CardActions>
  </Card>
);

CardExampleWithAvatar.propTypes = {
   info: PropTypes.Object,
   // propArray: PropTypes.array.isRequired,
   // propBool: PropTypes.bool.isRequired,
   // propFunc: PropTypes.func,
   // propNumber: PropTypes.number,
   // propString: PropTypes.string,
};
export default CardExampleWithAvatar;
