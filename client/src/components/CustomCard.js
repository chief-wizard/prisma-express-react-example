/** CustomCard.js **/
import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

// This is the Media Card taken from the Material-UI card demo and 
// adapted to display the Products in our Bakeshop database
// https://material-ui.com/components/cards

// Maybe needs some styling

export default function CustomCard(props) {
return (
  <Card>
    <CardActionArea>
      {/* Render the image at the top of the card */}
      {/* We pass in the Product title and image */}
      <CardMedia
        component="img"
        alt={props.title}
        height="140"
        image={props.image}
        title={props.title}
        />
      {/* Render the body of the card*/}
      <CardContent>
        {/* Render the title */}
        <Typography
          gutterBottom
          variant="h5"
          component="h2">
            {props.title}
        </Typography>
        {/* Render the price */}
        <Typography
          variant="body2"
          color="textSecondary"
          component="p">
            ${props.price}
        </Typography>
        {/** If less than 5 in stock display a message */}
        {props.stock < 5 &&
          <Typography
            variant="body2"
            color="textPrimary"
            component="p">
              Only {props.stock} left
          </Typography>
        }
        {/** Render the description */}
        <Typography
          variant="body2"
          color="textSecondary"
          component="p">
            {props.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    {/** Action button */}
    <CardActions >
      <Button
        size="medium"
        color="primary">
          Add to cart
      </Button>
    </CardActions>
   </Card>
 );
}
