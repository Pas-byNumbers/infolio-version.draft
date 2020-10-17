import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  div: {
    
  },
  root: {
    minWidth: 400,
    minHeight: 200,
    // display: 'flex',
    margin: 15,
    // flexDirection: 'column'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NoteCard(
  {
    title,
    content,
    createdDateTime,
    updatedDateTime
  }
) {
  const classes = useStyles();

  return (
    <div className={classes.div}>
     <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          <h3>{title}</h3>
        </Typography>
       
        <Typography variant="body2" component="p">
          {content}
          <br />
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {`Created on: ${createdDateTime}`}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {`Updated on: ${updatedDateTime}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> 
    </div>
    
  );
}