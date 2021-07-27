import React from 'react';

import makeStyles  from '@material-ui/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => {
    return (
        {
            footer: {
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
                height: '8%', 
                textAlign: 'center',
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center', 
                alignItems: 'center',       
            }, 
            text: {
                margin: 10, 
            }
        }
    );
})

export default function Footer() {

    const classes = useStyles(); 
  
    return (
        <Paper className={classes.footer}>
            <Link className={classes.text} color='textSecondary' > Sobre </Link>
            <Link className={classes.text} color='textSecondary' > Site do IFPB </Link>
            <Link className={classes.text} color='textSecondary' > Repositório </Link>
        </Paper>
    )
}