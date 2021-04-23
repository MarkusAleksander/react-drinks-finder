import React from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const SimpleCard = props => (
    <Card variant="outlined">
        <CardContent>
            {props.children}
        </CardContent>
        {props.actions ?
            <CardActions>
                {props.actions}
            </CardActions>
            : null}
    </Card>
);

export default SimpleCard;