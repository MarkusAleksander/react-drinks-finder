import React, { useState } from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from '@material-ui/core/CardActions';

import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SimpleCard = props => {
    
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
    <Card>
        {props.headline ?
            <CardHeader
                title={props.headline}
            >
            </CardHeader>
        : null }
        <CardContent>
            {props.children}
        </CardContent>
        {props.removeAction || props.description ? 
            <>
                <CardActions disableSpacing>
                    {props.removeAction ? <IconButton onClick={props.removeAction}><DeleteIcon /></IconButton> : null}
                    {props.description ? <IconButton onClick={handleExpandClick}><ExpandMoreIcon /></IconButton> : null}
                </CardActions>
                {props.description ?
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>{props.description}</Typography>
                        </CardContent>
                    </Collapse>
                : null}
            </>
        : null}
    </Card>
)};

export default SimpleCard;